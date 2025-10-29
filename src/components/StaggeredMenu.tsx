// src/components/StaggeredMenu.tsx
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import CustomLink from './ui/CustomLink';

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
  colors = ['#B19EEF', '#5227FF'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoUrl,
  logoText,
  centerItems,
  menuButtonColor = '#fff',
  openMenuButtonColor = '#fff',
  changeMenuColorOnOpen = true,
  isFixed = false,
  onMenuOpen,
  onMenuClose,
}: StaggeredMenuProps) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const preLayersRef = useRef<HTMLDivElement>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);

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
            onComplete: () => gsap.set(socialLinks, { clearProps: 'y,opacity' }),
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

  const toggleMenu = useCallback(() => {
    open ? closeMenu() : openMenu();
  }, [open, openMenu, closeMenu]);

  useLayoutEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) closeMenu();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, closeMenu]);

  const headerClasses = cx(
    'staggered-menu-header',
    isFixed && 'fixed w-full top-0 left-0 z-50',
    className
  );

  return (
    <div className="sm-scope">
      <header className={headerClasses}>
        <div className="sm-logo">
          {logoUrl ? (
            <img src={logoUrl} alt="Logo" className="sm-logo-img" />
          ) : (
            <span className="sm-logo-text text-2xl font-bold text-white transition-colors duration-300">
              {logoText}
            </span>
          )}
        </div>

        {centerItems && centerItems.length > 0 && (
          <nav className="flex items-center gap-6">
            {centerItems.map((item, i) => (
              <CustomLink key={i} href={item.href}  text={item.text} />                
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
                  onClick={closeMenu}
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
              <h3 className="sm-socials-title text-(--sm-accent,#ff0000)">Socials</h3>
              <ul className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap" role="list">
                {socialItems.map((s, i) => (
                  <li key={s.label + i} className="sm-socials-item">
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm-socials-link text-[1.2rem] font-medium text-[#111] no-underline relative inline-block py-0.5 transition-[color,opacity] duration-300 ease-linear"
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
        .sm-scope .staggered-menu-header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2em;
          background: transparent;
          pointer-events: none;
          z-index: 20;
        }
        .sm-scope .staggered-menu-header > * {
          pointer-events: auto;
        }
        .sm-scope .sm-logo {
          display: flex;
          align-items: center;
          user-select: none;
        }
        .sm-scope .sm-logo-img {
          display: block;
          height: 32px;
          width: auto;
          object-fit: contain;
        }
        .sm-scope .sm-toggle {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #e9e9ef;
          font-weight: 500;
          line-height: 1;
          overflow: visible;
        }
        .sm-scope .sm-toggle:focus-visible {
          outline: 2px solid #ffffffaa;
          outline-offset: 4px;
          border-radius: 4px;
        }
        .sm-scope .sm-toggle-textWrap {
          position: relative;
          margin-right: 0.5em;
          display: inline-block;
          height: 1em;
          overflow: hidden;
          white-space: nowrap;
          width: var(--sm-toggle-width, auto);
          min-width: var(--sm-toggle-width, auto);
        }
        .sm-scope .sm-toggle-textInner {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        .sm-scope .sm-toggle-line {
          display: block;
          height: 1em;
          line-height: 1;
        }
        .sm-scope .sm-icon {
          position: relative;
          width: 14px;
          height: 14px;
          flex: 0 0 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
        }
        .sm-scope .sm-icon-line {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 100%;
          height: 2px;
          background: currentColor;
          border-radius: 2px;
          transform: translate(-50%, -50%);
          will-change: transform;
        }
        .sm-scope .staggered-menu-panel {
          position: absolute;
          top: 0;
          right: 0;
          width: clamp(260px, 38vw, 420px);
          height: 100%;
          background: white;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          padding: 6em 2em 2em 2em;
          overflow-y: auto;
          z-index: 10;
        }
        .sm-scope [data-position='left'] .staggered-menu-panel {
          right: auto;
          left: 0;
        }
        .sm-scope .sm-prelayers {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: clamp(260px, 38vw, 420px);
          pointer-events: none;
          z-index: 5;
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
        }
        .sm-scope .sm-panel-inner {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
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
          font-weight: 500;
          color: var(--sm-accent, #ff0000);
        }
        .sm-scope .sm-socials-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .sm-scope .sm-socials-link {
          font-size: 1.2rem;
          font-weight: 500;
          color: #111;
          text-decoration: none;
          position: relative;
          padding: 2px 0;
          display: inline-block;
          transition: color 0.3s ease, opacity 0.3s ease;
        }
        .sm-scope .sm-socials-link:hover {
          color: var(--sm-accent, #ff0000);
        }
        .sm-scope .sm-panel-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .sm-scope .sm-panel-item {
          position: relative;
          color: #000;
          font-weight: 600;
          font-size: 4rem;
          cursor: pointer;
          line-height: 1;
          letter-spacing: -2px;
          text-transform: uppercase;
          transition: color 0.25s;
          display: inline-block;
          padding-right: 1.4em;
        }
        .sm-scope .sm-panel-item:hover {
          color: var(--sm-accent, #ff0000);
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
          top: 0.1em;
          right: 3.2em;
          font-size: 18px;
          font-weight: 400;
          color: var(--sm-accent, #ff0000);
          letter-spacing: 0;
          pointer-events: none;
          user-select: none;
          opacity: var(--sm-num-opacity, 0);
        }
        @media (max-width: 1024px) {
          .sm-scope .staggered-menu-panel {
            width: 100%;
            left: 0;
            right: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default StaggeredMenu;