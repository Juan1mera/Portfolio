/* eslint-disable @typescript-eslint/no-unused-expressions */
// src/components/StaggeredMenu.tsx
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import CustomLink from './ui/CustomLink';
import { WebColors } from '../constants/colors';
import LogoSvg from './LogoSvg';

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
}

export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}

export interface StaggeredMenuProps {
  position?: 'left' | 'right';
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  logoText?: string;
  centerItems?: { text: string; href: string }[];
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  isFixed?: boolean;
  changeMenuColorOnOpen?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(' ');

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  colors = [WebColors.PurpleLight, WebColors.BackgroundBlack],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoUrl,
  logoText,
  centerItems,
  menuButtonColor = WebColors.TextColor,
  openMenuButtonColor = WebColors.TextColor,
  changeMenuColorOnOpen = true,
  isFixed = false,
  onMenuOpen,
  onMenuClose,
  accentColor = WebColors.PurpleLight,
}: StaggeredMenuProps) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

  const panelRef = useRef<HTMLDivElement>(null);
  const preLayersRef = useRef<HTMLDivElement>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null); 

  const plusHRef = useRef<HTMLSpanElement>(null);
  const plusVRef = useRef<HTMLSpanElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  const textInnerRef = useRef<HTMLSpanElement>(null);
  const textLines = ['Menu', 'Close'];

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTlRef = useRef<gsap.core.Timeline | null>(null);
  const spinTweenRef = useRef<gsap.core.Timeline | null>(null);
  const textCycleAnimRef = useRef<gsap.core.Tween | null>(null);
  const colorTweenRef = useRef<gsap.core.Tween | null>(null);

  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const busyRef = useRef(false);

  const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null);

  // Función para scroll suave a un ID
  const scrollToHash = useCallback((hash: string) => {
    const id = hash.startsWith('#') ? hash.slice(1) : hash;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const closeMenu = useCallback(() => {
    if (busyRef.current || !openRef.current) return;
    busyRef.current = true;

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const offscreen = position === 'left' ? -100 : 100;

    openTlRef.current?.kill();

    const tl = gsap.timeline({
      onComplete: () => {
        busyRef.current = false;
        onMenuClose?.();
      }
    });

    closeTlRef.current = tl;

    tl.to(panel, { xPercent: offscreen, duration: 0.5, ease: 'power4.in' }, 0);

    layers.reverse().forEach((el, i) => {
      tl.to(el, { xPercent: offscreen, duration: 0.4, ease: 'power4.in' }, i * 0.05);
    });

    spinTweenRef.current?.kill();
    spinTweenRef.current = gsap.timeline();
    spinTweenRef.current.to(iconRef.current, { rotate: 0, duration: 0.3, ease: 'power2.out' });
    spinTweenRef.current.to(plusVRef.current, { rotate: 90, duration: 0.3, ease: 'power2.out' }, 0);

    textCycleAnimRef.current?.kill();
    textCycleAnimRef.current = gsap.to(textInnerRef.current, { yPercent: 0, duration: 0.3, ease: 'power2.out' });

    if (changeMenuColorOnOpen) {
      colorTweenRef.current?.kill();
      colorTweenRef.current = gsap.to(toggleBtnRef.current, { color: menuButtonColor, duration: 0.3 });
    }

    setOpen(false);
    openRef.current = false;
  }, [position, changeMenuColorOnOpen, menuButtonColor, onMenuClose]);

  // Manejar clics en enlaces
  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    
    // Si es una ruta interna de React Router (empieza con / pero no es hash)
    if (link.startsWith('/') && !link.includes('#')) {
      navigate(link);
      closeMenu();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Si es un hash (scroll dentro de la página)
    const hash = new URL(link, window.location.href).hash;
    if (hash) {
      // Si estamos en otra página, primero navega al home
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          scrollToHash(hash);
        }, 100);
      } else {
        scrollToHash(hash);
      }
      closeMenu();
    }
  }, [navigate, location.pathname, scrollToHash, closeMenu]);

  // Manejar click del logo
  const handleLogoClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
    closeMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate, closeMenu]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;

      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;

      if (!panel || !plusH || !plusV || !icon || !textInner) return;

      let preLayers: HTMLElement[] = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer')) as HTMLElement[];
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen });

      gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
      gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });

      gsap.set(textInner, { yPercent: 0 });

      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
    });
    return () => ctx.revert();
  }, [menuButtonColor, position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTlRef.current) {
      closeTlRef.current.kill();
      closeTlRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
    const numberEls = Array.from(
      panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
    ) as HTMLElement[];
    const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];

    const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }));

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    if (numberEls.length) gsap.set(numberEls, { '--sm-num-opacity': 0 });
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;

    tl.fromTo(
      panel,
      { xPercent: position === 'left' ? -100 : 100 },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStart = panelInsertTime + panelDuration * 0.15;

      tl.to(
        itemEls,
        { yPercent: 0, rotate: 0, duration: 1, ease: 'power4.out', stagger: { each: 0.1, from: 'start' } },
        itemsStart
      );

      if (numberEls.length) {
        tl.to(
          numberEls,
          { duration: 0.6, ease: 'power2.out', '--sm-num-opacity': 1, stagger: { each: 0.08, from: 'start' } },
          itemsStart + 0.1
        );
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4;

      if (socialTitle) tl.to(socialTitle, { opacity: 1, duration: 0.5, ease: 'power2.out' }, socialsStart);
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: 'power3.out',
            stagger: { each: 0.08, from: 'start' },
            onComplete: () => {
              socialLinks.forEach(link => gsap.set(link, { clearProps: 'y,opacity' }));
            },
          },
          socialsStart + (socialTitle ? 0.15 : 0)
        );
      }
    }

    return tl;
  }, [position]);

  const openMenu = useCallback(() => {
    if (busyRef.current || openRef.current) return;
    busyRef.current = true;

    const tl = buildOpenTimeline();
    if (!tl) return;

    openTlRef.current = tl;
    tl.play().then(() => {
      busyRef.current = false;
      onMenuOpen?.();
    });

    spinTweenRef.current?.kill();
    spinTweenRef.current = gsap.timeline();
    spinTweenRef.current.to(iconRef.current, { rotate: 90, duration: 0.3, ease: 'power2.out' });
    spinTweenRef.current.to(plusVRef.current, { rotate: 0, duration: 0.3, ease: 'power2.out' }, 0);

    textCycleAnimRef.current?.kill();
    textCycleAnimRef.current = gsap.to(textInnerRef.current, { yPercent: -100, duration: 0.3, ease: 'power2.out' });

    if (changeMenuColorOnOpen) {
      colorTweenRef.current?.kill();
      colorTweenRef.current = gsap.to(toggleBtnRef.current, { color: openMenuButtonColor, duration: 0.3 });
    }

    setOpen(true);
    openRef.current = true;
  }, [buildOpenTimeline, changeMenuColorOnOpen, openMenuButtonColor, onMenuOpen]);

  const toggleMenu = useCallback(() => {
    open ? closeMenu() : openMenu();
  }, [open, openMenu, closeMenu]);

  // Cerrar al presionar ESC
  useLayoutEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) closeMenu();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, closeMenu]);

  // Cerrar al hacer clic fuera del panel
  useLayoutEffect(() => {
    if (!open) return;

    const handleOverlayClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('click', handleOverlayClick);
    }, 300);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [open, closeMenu]);

  const headerClasses = cx(
    'staggered-menu-header',
    isFixed && 'fixed w-full top-0 left-0 z-50',
    className
  );

  return (
    <div className="sm-scope">
      {open && <div ref={overlayRef} className="sm-overlay" />}

      <header className={headerClasses}>
        <div className="sm-logo">
          {logoUrl ? (
            <a href="/" onClick={handleLogoClick}>
              <img src={logoUrl} alt="Logo" className="sm-logo-img" />
            </a>
          ) : (
            <a 
              href="/" 
              onClick={handleLogoClick}
              className="flex items-center cursor-pointer"
            >
              <LogoSvg className="h-7 w-auto mr-2" /> 
              <span
                className="text-2xl font-bold whitespace-nowrap"
                style={{ lineHeight: 1 }}
              >
                {logoText}
              </span>
            </a>
          )}
        </div>

        {centerItems && centerItems.length > 0 && (
          <nav className="flex items-center gap-6">
            {centerItems.map((item, i) => (
              <CustomLink key={i} href={item.href} text={item.text} />
            ))}
          </nav>
        )}

        <button
          ref={toggleBtnRef}
          className="sm-toggle"
          onClick={toggleMenu}
          aria-expanded={open}
          aria-controls="staggered-menu-panel"
        >
          <span className="sm-toggle-textWrap">
            <span className="sm-toggle-textInner" ref={textInnerRef}>
              {textLines.map((line, i) => (
                <span key={line + i} className="sm-toggle-line">
                  {line}
                </span>
              ))}
            </span>
          </span>
          <span className="sm-icon" ref={iconRef}>
            <span className="sm-icon-line" ref={plusHRef}></span>
            <span className="sm-icon-line" ref={plusVRef}></span>
          </span>
        </button>
      </header>

      <div className="sm-prelayers" ref={preLayersRef} data-position={position}>
        {colors.map((color, i) => (
          <div key={color + i} className="sm-prelayer" style={{ backgroundColor: color }}></div>
        ))}
      </div>

      <aside
        className="staggered-menu-panel"
        ref={panelRef}
        id="staggered-menu-panel"
        data-position={position}
        aria-hidden={!open}
      >
        <div className="sm-panel-inner">
          <ul
            className="sm-panel-list"
            data-numbering={displayItemNumbering ? '' : undefined}
            role="list"
          >
            {items.map((item, i) => (
              <li key={item.label + i} className="sm-panel-item">
                <a
                  href={item.link}
                  className="sm-panel-itemLink"
                  aria-label={item.ariaLabel}
                  onClick={(e) => handleLinkClick(e, item.link)}
                >
                  <div className="sm-panel-itemWrap">
                    <span className="sm-panel-itemLabel">{item.label}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          {displaySocials && socialItems.length > 0 && (
            <div className="sm-socials">
              <h3 className="sm-socials-title">Socials</h3>
              <ul className="sm-socials-list" role="list">
                {socialItems.map((s, i) => (
                  <li key={s.label + i} className="sm-socials-item">
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm-socials-link"
                      onClick={closeMenu}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>

      <style>{`
        .sm-scope {
          --sm-accent: ${accentColor};
          --sm-bg: ${WebColors.Background};
          --sm-text: ${WebColors.TextColor};
          --sm-purple: ${WebColors.PurpleLight};
          --sm-green: ${WebColors.PurpleLight};
        }

        .sm-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          z-index: 9;
          cursor: pointer;
        }

        .sm-scope .staggered-menu-header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem;
          background: transparent;
          pointer-events: none;
          z-index: 20;
          transition: background 0.3s ease;
        }

        .sm-scope .staggered-menu-header.open {
          background: rgba(9, 9, 9, 0.8);
          backdrop-filter: blur(8px);
        }

        .sm-scope .staggered-menu-header > * {
          pointer-events: auto;
        }

        .sm-scope .sm-logo a {
          text-decoration: none;
          color: inherit;
          transition: opacity 0.3s ease;
        }

        .sm-scope .sm-logo a:hover {
          opacity: 0.7;
        }

        .sm-scope .sm-logo-text {
          color: var(--sm-text);
        }

        .sm-scope .sm-toggle {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--sm-text);
          font-weight: 600;
          font-size: 1rem;
          line-height: 1;
          padding: 0.5rem 0;
          z-index: 30;
        }

        .sm-scope .sm-toggle:focus-visible {
          outline: 2px solid var(--sm-purple);
          outline-offset: 4px;
          border-radius: 4px;
        }

        .sm-scope .sm-toggle-textWrap {
          position: relative;
          display: inline-block;
          height: 1.2em;
          overflow: hidden;
          white-space: nowrap;
          min-width: 3.5em;
        }

        .sm-scope .sm-toggle-textInner {
          display: flex;
          flex-direction: column;
        }

        .sm-scope .sm-toggle-line {
          display: block;
          height: 1.2em;
          line-height: 1.2;
        }

        .sm-scope .sm-icon {
          position: relative;
          width: 18px;
          height: 18px;
          flex: 0 0 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .sm-scope .sm-icon-line {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 100%;
          height: 2px;
          background: currentColor;
          border-radius: 1px;
          transform: translate(-50%, -50%);
        }

        .sm-scope .staggered-menu-panel,
        .sm-scope .sm-prelayers {
          width: min(500px, 50vw);
          max-width: 500px;
        }

        .sm-scope .staggered-menu-panel {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          background: var(--sm-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          padding: 7rem 3rem 2.5rem;
          overflow-y: auto;
          z-index: 10;
          box-shadow: -8px 0 30px rgba(0,0,0,0.3);
        }

        .sm-scope [data-position='left'] .staggered-menu-panel {
          right: auto;
          left: 0;
          box-shadow: 8px 0 30px rgba(0,0,0,0.3);
        }

        .sm-scope [data-position='left'] .sm-prelayers {
          right: auto;
          left: 0;
        }

        .sm-scope .sm-prelayer {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 100%;
          opacity: 0.7;
        }

        .sm-scope .sm-panel-inner {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .sm-scope .sm-panel-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .sm-scope .sm-panel-item {
          position: relative;
          color: var(--sm-text);
          font-weight: 700;
          font-size: clamp(2.5rem, 6vw, 4rem);
          cursor: pointer;
          line-height: 1;
          letter-spacing: -1px;
          text-transform: uppercase;
          transition: color 0.3s ease;
          padding-right: 4.5rem;
        }

        .sm-scope .sm-panel-item:hover {
          color: var(--sm-green);
        }

        .sm-scope .sm-panel-itemLabel {
          display: inline-block;
          will-change: transform;
          transform-origin: 50% 100%;
        }

        .sm-scope .sm-panel-list[data-numbering] {
          counter-reset: smItem;
        }

        .sm-scope .sm-panel-list[data-numbering] .sm-panel-item::after {
          counter-increment: smItem;
          content: counter(smItem, decimal-leading-zero);
          position: absolute;
          top: 0.15em;
          right: 0.5rem;
          font-size: 1rem;
          font-weight: 500;
          color: var(--sm-green);
          letter-spacing: 0;
          opacity: var(--sm-num-opacity, 0);
          transition: opacity 0.4s ease;
        }

        .sm-scope .sm-socials {
          margin-top: auto;
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .sm-scope .sm-socials-title {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
          color: var(--sm-green);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .sm-scope .sm-socials-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: row;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .sm-scope .sm-socials-link {
          font-size: 1.1rem;
          font-weight: 500;
          color: #888;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .sm-scope .sm-socials-link:hover {
          color: var(--sm-purple);
        }

        @media (max-width: 768px) {
          .sm-scope .staggered-menu-panel,
          .sm-scope .sm-prelayers {
            width: 100% !important;
            max-width: none;
          }

          .sm-scope .staggered-menu-header {
            padding: 1.5rem;
          }

          .sm-scope .sm-toggle {
            font-size: 0.9rem;
          }

          .sm-scope .sm-panel-item {
            padding-right: 3.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default StaggeredMenu;