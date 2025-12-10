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
      image1: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/AmigoVetWeb/Home.png',
      image2: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/AmigoVetWeb/Home2.png',
      image3: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/AmigoVetWeb/Progress.png',
      linkViewProject: 'https://amigovet.app',
      linkViewCode: 'https://github.com/Juan1mera/AmigoVet-Web',
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
      image1: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/ZentryWeb/Page1.webp',
      image2: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/ZentryWeb/Page2.webp',
      image3: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/ZentryWeb/Page3.webp',
      linkViewProject: 'https://clon-zentry.vercel.app/',
      linkViewCode: 'https://github.com/Juan1mera/Clon-Zentry'
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
      image1: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/AdminWeb/Page1.webp',
      image2: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/AdminWeb/Page2.webp',
      image3: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/AdminWeb/Page3.webp',
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