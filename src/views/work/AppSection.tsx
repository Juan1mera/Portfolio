import BlurText from "../../components/BlurText";
import FlowingMenu from "../../components/FlowingMenu"

function AppSection() {

  const appProjects = [
    {
      title: 'AmigoVet',
      description: 'App móvil para dueños de mascotas con recordatorios y geolocalización.',
      role: 'Mobile Developer',
      year: '2024',
      technologies: ['React Native', 'Expo', 'Firebase'],
      image1: 'https://picsum.photos/600/400?random=7',
      linkViewProject: 'https://play.google.com/store/apps/details?id=com.amigovet',
    },
    // ... más proyectos
  ];

  return (
    <div className="w-full h-[600px] overflow-hidden">
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