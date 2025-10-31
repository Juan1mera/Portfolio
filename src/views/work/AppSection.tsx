import { SiMongodb, SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si";
import BlurText from "../../components/BlurText";
import { FlowingMenu } from "../../components/FlowingMenu";

function AppSection() {

  const appProjects = [
    {
      title: 'AmigoVet',
      description: 'App móvil para dueños de mascotas con recordatorios y geolocalización.',
      role: 'Mobile Developer',
      year: '2024',
      technologies: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
      ],
      image1: 'https://picsum.photos/600/400?random=7',
      linkViewProject: 'https://play.google.com/store/apps/details?id=com.amigovet',
    },
  ];

  return (
    <div className="w-full">
      <BlurText
        text="APPS"
        className="font-extrabold text-2xl md:text-4xl pl-10"
        animateBy="words"
        delay={300}
        direction="top"
      />
      <FlowingMenu items={appProjects} />
    </div>
  )
}

export default AppSection