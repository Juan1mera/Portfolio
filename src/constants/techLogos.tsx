import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';

export const techLogos = [
    { 
      node: <SiReact className="w-12 h-12" />, 
      title: "React", 
      href: "https://react.dev",
      hoverText: "React" 
    },
    { 
      node: <SiNextdotjs className="w-12 h-12" />, 
      title: "Next.js", 
      href: "https://nextjs.org",
      hoverText: "Next.js" 
    },
    { 
      node: <SiTypescript className="w-12 h-12" />, 
      title: "TypeScript", 
      href: "https://www.typescriptlang.org",
      hoverText: "TypeScript" 
    },
    { 
      node: <SiTailwindcss className="w-12 h-12" />, 
      title: "Tailwind CSS", 
      href: "https://tailwindcss.com",
      hoverText: "Tailwind CSS" 
    },
  ];