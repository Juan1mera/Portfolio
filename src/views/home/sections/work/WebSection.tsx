import { SiGsk, SiNestjs, SiReact, SiSass, SiSupabase, SiVite } from 'react-icons/si';
import BlurText from '../../../../components/BlurText';
import { FlowingMenu } from '../../../../components/FlowingMenu';

function WebSection() {
  const webProjects = [
    {
      title: 'AmigoVet Web',
      description: 'Website for the presentation of the "AmigoVet" mobile application in order to showcase its functionalities, previous versions and everything related.',
      role: 'Frontend Developer',
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
      title: 'Zentry Clon',
      description: 'Zentry is a company that works with artificial intelligence. This 2024 clone of the Zentry website was created to practice using front-end development, animations with GSAP, and CEO.',
      role: 'Frontend Developer',
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
      title: 'Data management',
      description: 'Management system for data from multiple points of sale, where each point of sale can add only data from its own point of sale, and the administrator can view, modify, and generate monthly reports in Excel.',
      role: 'Full-Stack Developer',
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