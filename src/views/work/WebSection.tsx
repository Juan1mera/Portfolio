// src/sections/WebSection.tsx
import BlurText from '../../components/BlurText';
import { FlowingMenu } from '../../components/FlowingMenu';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiVuedotjs, SiChartdotjs, SiFirebase, SiNextdotjs, SiPrisma, SiPostgresql } from 'react-icons/si';

function WebSection() {
  const webProjects = [
    {
      title: 'AmigoVet Web',
      description: 'Plataforma veterinaria para gestión de citas, historiales clínicos y telemedicina.',
      role: 'Full Stack Developer',
      year: '2024',
      technologies: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
      ],
      image1: 'https://picsum.photos/600/400?random=1',
      image2: 'https://picsum.photos/600/400?random=2',
      linkViewProject: 'https://amigovet.com',
      linkViewCode: 'https://github.com/user/amigovet-web',
    },
    {
      title: 'Zentry',
      description: 'Dashboard administrativo para gestión de usuarios y reportes en tiempo real.',
      role: 'Frontend Developer',
      year: '2023',
      technologies: [
        { name: 'Vue.js', icon: <SiVuedotjs /> },
        { name: 'Chart.js', icon: <SiChartdotjs /> },
        { name: 'Firebase', icon: <SiFirebase /> },
      ],
      image1: 'https://picsum.photos/600/400?random=3',
      linkViewProject: 'https://zentry.app',
    },
    {
      title: 'Administración Pro',
      description: 'Sistema ERP ligero para pequeñas empresas.',
      role: 'Lead Developer',
      year: '2024',
      technologies: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Prisma', icon: <SiPrisma /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
      ],
      image1: 'https://picsum.photos/600/400?random=4',
      image2: 'https://picsum.photos/600/400?random=5',
      image3: 'https://picsum.photos/600/400?random=6',
      linkViewCode: 'https://github.com/user/admin-pro',
    },
  ];

  return (
    <div className="w-full">
      <BlurText
        text="WEBS"
        className="font-extrabold text-2xl md:text-4xl pl-10"
        animateBy="words"
        delay={300}
        direction="top"
      />
      <FlowingMenu items={webProjects} />
    </div>
  );
}

export default WebSection;