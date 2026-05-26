import { SiFirebase, SiGsk, SiMongodb, SiNestjs, SiReact, SiSass, SiSupabase, SiVite } from 'react-icons/si';
import BlurText from '../../../../components/BlurText';
import { FlowingMenu } from '../../../../components/FlowingMenu';
import { useLanguage } from '../../../../context/LanguageContext';

function WebSection() {
  const { t } = useLanguage();

  const webProjects = [
    {
      title: t.work.projects.amigovetWeb.title,
      description: t.work.projects.amigovetWeb.description,
      role: t.work.projects.amigovetWeb.role,
      year: '2025',
      technologies: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Vite', icon: <SiVite /> },
      ],
      image1: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768444194/Page1_o20xij.webp',
      image2: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768444195/Page2_vzibml.webp',
      image3: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768444195/Page3_bcei0t.webp',
      links: [
        { name: "GitHub", url: "https://github.com/Juan1mera/AmigoVet-Web" },
        { name: "Web", url: "https://amigovet.app" },
      ],
    },
    {
      title: t.work.projects.knowYou.title,
      description: t.work.projects.knowYou.description,
      role: t.work.projects.knowYou.role,
      year: '2026',
      technologies: [
        { name: 'NextJs', icon: <SiReact /> },
        { name: 'FireBase', icon: <SiFirebase /> },
        { name: 'NoSQL', icon: <SiMongodb /> },
      ],
      image1: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1779809439/Page2_mzfksq.webp',
      image2: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1779809439/Page1_fqi0hq.webp',
      image3: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1779809438/Page3_avw0ax.webp',
      links: [
        { name: "GitHub", url: "https://github.com/Juan1mera/Knew-you" },
        { name: "Web", url: "https://knew-you.vercel.app/" },
      ],
    },
    {
      title: t.work.projects.zentryClon.title,
      description: t.work.projects.zentryClon.description,
      role: t.work.projects.zentryClon.role,
      year: '2024',
      technologies: [
        { name: 'React', icon: <SiReact /> },
        { name: 'React', icon: <SiGsk /> },
      ],
      image1: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768442935/Page1_wnhl8m.webp',
      image2: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768442936/Page2_ufx9ff.webp',
      image3: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768442937/Page3_dj4lan.webp',
      links: [
        { name: "GitHub", url: "https://github.com/Juan1mera/Clon-Zentry" },
        { name: "Web", url: "https://clon-zentry.vercel.app/" },
      ],
    },
    {
      title: t.work.projects.dataManagement.title,
      description: t.work.projects.dataManagement.description,
      role: t.work.projects.dataManagement.role,
      year: '2024',
      technologies: [
        { name: 'React', icon: <SiReact /> },
        { name: 'SASS', icon: <SiSass /> },
        { name: 'NestJs', icon: <SiNestjs /> },
        { name: 'Supabase', icon: <SiSupabase /> },
      ],
      image1: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768442899/Page1_uuqwdl.webp',
      image2: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768442898/Page2_jolkcb.webp',
      image3: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768442900/Page3_dxzgq2.webp',
    },
  ];

  return (
    <div className="w-full">
      <BlurText
        text={t.work.webs}
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