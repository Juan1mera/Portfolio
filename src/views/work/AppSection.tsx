import { SiDart, SiFlutter, SiGooglemaps, SiMysql, SiNestjs, SiSocketdotio, SiSpring, SiSqlite, SiSupabase } from "react-icons/si";
import BlurText from "../../components/BlurText";
import { FlowingMenu } from "../../components/FlowingMenu";


function AppSection() {

  const appProjects = [
    {
      title: 'AmigoVet',
      description: 'Mobile application for the care of your pets, where you can keep all the information about your pet as if it were its virtual ID card.',
      role: 'Full-Stack Developer',
      year: '2025(In Progress)',
      technologies: [
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'Dart', icon: <SiDart /> },
        { name: 'SupaBase', icon: <SiSupabase /> },
        { name: 'SQLite', icon: <SiSqlite /> },
        { name: 'NestJs', icon: <SiNestjs /> },
      ],
      image1: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/AmigoVetApp/Mockup1.webp',
      image2: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/AmigoVetApp/Mockup2.webp',
      image3: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/AmigoVetApp/Mockup3.webp',
      linkViewProject: 'https://www.amigovet.app/',
      linkViewCode: 'https://github.com/AmigoVet',
    },
    {
      title: 'GoCab',
      description: 'A multiplatform mobile application where you can access it as both a user and a driver. You can see nearby taxis, request a ride, the driver can make you a counteroffer, you can track the trip and rate it at the end of the ride, built with Flutter and Spring Boot as the backend.',
      role: 'Full-Stack Developer',
      year: '2025',
      technologies: [
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'Dart', icon: <SiDart /> },
        { name: 'Spring Boot', icon: <SiSpring /> },
        { name: 'Socket.IO', icon: <SiSocketdotio /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Google Maps Api', icon: <SiGooglemaps /> },
      ],
      image1: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/GoCabApp/Mockup1.webp',
      image2: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/GoCabApp/Mockup2.webp',
      image3: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/GoCabApp/Mockup3.webp',
      linkViewProject: 'https://github.com/BusTrack-App/Uber-Clone-Flutter',
      linkViewCode: 'https://github.com/BusTrack-App/Spring-Boot-Uber-Clone',
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