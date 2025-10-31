// src/components/FlowingMenu.tsx
import React from 'react';
import { gsap } from 'gsap';
import LinkProject from '../views/work/LinkProject';
import IconTech from './IconTech';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface ProjectData {
  title: string;
  description: string;
  role: string;
  year: string;
  technologies: TechItem[];
  image1?: string;
  image2?: string;
  image3?: string;
  linkViewProject?: string;
  linkViewCode?: string;
}

interface FlowingMenuProps {
  items: ProjectData[];
}

export const FlowingMenu: React.FC<FlowingMenuProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const panelRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const itemRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const togglePanel = (index: number) => {
    const panel = panelRefs.current[index];
    const item = itemRefs.current[index];
    if (!panel || !item) return;

    if (openIndex === index) {
      gsap.to(panel, {
        height: 0,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.inOut',
        onComplete: () => {
          setOpenIndex(null);
        },
      });
    } else {
      if (openIndex !== null && panelRefs.current[openIndex]) {
        const prevPanel = panelRefs.current[openIndex];
        gsap.to(prevPanel, { height: 0, opacity: 0, duration: 0.5, ease: 'power3.inOut' });
      }

      setOpenIndex(index);
      gsap.fromTo(
        panel,
        { height: 0, opacity: 0 },
        {
          height: 'auto',
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
        }
      );
    }
  };

  return (
    <div className="w-full">
      <nav className="flex flex-col w-full">
        {items.map((item, idx) => (
          <div key={idx} className="border-b border-white/20">
            <MenuItem
              ref={(el) => { itemRefs.current[idx] = el; }}
              text={item.title}
              images={[item.image1, item.image2, item.image3].filter(Boolean) as string[]}
              isOpen={openIndex === idx}
              onClick={() => togglePanel(idx)}
            />
            <div
              ref={(el) => { panelRefs.current[idx] = el; }}
              className="overflow-hidden"
              style={{ height: 0 }}
            >
              <ProjectPanel data={item} />
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

// === MENU ITEM (sin cambios) ===
interface MenuItemProps {
  text: string;
  images: string[];
  isOpen: boolean;
  onClick: () => void;
}

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  ({ text, images, isOpen, onClick }, ref) => {
    const marqueeRef = React.useRef<HTMLDivElement>(null);
    const marqueeInnerRef = React.useRef<HTMLDivElement>(null);
    const textRef = React.useRef<HTMLDivElement>(null);
    const animationDefaults = { duration: 0.6, ease: 'expo' };

    const findClosestEdge = (
      mouseX: number,
      mouseY: number,
      width: number,
      height: number
    ): 'top' | 'bottom' => {
      const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
      const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
      return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
    };

    const handleMouseEnter = (ev: React.MouseEvent<HTMLDivElement>) => {
      if (isOpen || !marqueeRef.current || !marqueeInnerRef.current || !textRef.current) return;

      const rect = ev.currentTarget.getBoundingClientRect();
      const edge = findClosestEdge(
        ev.clientX - rect.left,
        ev.clientY - rect.top,
        rect.width,
        rect.height
      );

      const tl = gsap.timeline({ defaults: animationDefaults });
      tl.set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
        .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
        .to(textRef.current, { opacity: 0 }, 0)
        .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
    };

    const handleMouseLeave = (ev: React.MouseEvent<HTMLDivElement>) => {
      if (isOpen || !marqueeRef.current || !marqueeInnerRef.current || !textRef.current) return;

      const rect = ev.currentTarget.getBoundingClientRect();
      const edge = findClosestEdge(
        ev.clientX - rect.left,
        ev.clientY - rect.top,
        rect.width,
        rect.height
      );

      const tl = gsap.timeline({ defaults: animationDefaults });
      tl.to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
        .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
        .to(textRef.current, { opacity: 1 }, 0);
    };

    React.useEffect(() => {
      if (isOpen && marqueeRef.current && marqueeInnerRef.current && textRef.current) {
        gsap.to(textRef.current, { opacity: 0, duration: 0.3 });
        gsap.to([marqueeRef.current, marqueeInnerRef.current], { y: '0%', duration: 0.6, ease: 'expo' });
      } else if (!isOpen && textRef.current) {
        gsap.to(textRef.current, { opacity: 1, duration: 0.3 });
      }
    }, [isOpen]);

    const repeatedMarqueeContent = React.useMemo(() => {
      return Array.from({ length: 3 }).map((_, idx) => (
        <React.Fragment key={idx}>
          <span className="text-background uppercase font-normal text-[4vh] leading-[1.2] px-[1vw] py-[1vh]">
            {text}
          </span>
          {images[idx % images.length] && (
            <div
              className="w-[200px] h-[7vh] mx-[2vw] my-[2em] p-[1em_0] rounded-[50px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${images[idx % images.length]})` }}
            />
          )}
        </React.Fragment>
      ));
    }, [text, images]);

    return (
      <div
        ref={ref}
        className="relative overflow-hidden cursor-pointer transition-all duration-300"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        <div 
          ref={textRef}
          className="flex items-center justify-center h-24 md:h-28 relative uppercase font-semibold text-text-color text-3xl md:text-5xl transition-colors"
        >
          {text}
          <span className="ml-4 text-lg">{isOpen ? '−' : '+'}</span>
        </div>

        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-text-light"
          ref={marqueeRef}
          style={{ transform: 'translateY(101%)' }}
        >
          <div className="h-full w-max flex items-center" ref={marqueeInnerRef}>
            <div className="flex items-center h-full w-max will-change-transform animate-marquee">
              {repeatedMarqueeContent}
              {repeatedMarqueeContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
MenuItem.displayName = 'MenuItem';

// === PROJECT PANEL (actualizado con IconTech) ===
interface ProjectPanelProps {
  data: ProjectData;
}

export const ProjectPanel: React.FC<ProjectPanelProps> = ({ data }) => {
  const images = [data.image1, data.image2, data.image3].filter(Boolean);

  return (
    <div className="bg-text-light text-background p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h3>
        <p className="text-lg mb-6 text-background-black">{data.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <span className="font-semibold text-sm uppercase text-purple-light">Rol</span>
            <p className="mt-1">{data.role}</p>
          </div>
          <div>
            <span className="font-semibold text-sm uppercase text-purple-light">Year</span>
            <p className="mt-1">{data.year}</p>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.technologies.map((tech, i) => (
                <IconTech key={i} icon={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>
        </div>

        {images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {images.map((img, i) => (
              <div
                key={i}
                className="aspect-video bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        )}

        <div className="flex gap-4 flex-wrap">
          {data.linkViewProject && (
            <LinkProject text='Project' href={data.linkViewProject} />
          )}
          {data.linkViewCode && (
            <LinkProject text='GitHub' href={data.linkViewCode} />
          )}
        </div>
      </div>
    </div>
  );
};