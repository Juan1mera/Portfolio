import { SiAuth0, SiDart, SiFlutter, SiGooglemaps, SiHostinger, SiMysql, SiNestjs, SiNginx, SiSocketdotio, SiSpring, SiSqlite, SiSupabase } from "react-icons/si";
import BlurText from "../../../../components/BlurText";
import { FlowingMenu } from "../../../../components/FlowingMenu";


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
        { name: 'SQLite', icon: <SiSqlite /> },
        { name: 'Spring Boot', icon: <SiSpring /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'NGinx', icon: <SiNginx /> },
        { name: 'Auth0', icon: <SiAuth0 /> },
      ],
      image1: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/AmigoVetApp/Mockup1.webp',
      image2: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/AmigoVetApp/Mockup2.webp',
      image3: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/AmigoVetApp/Mockup3.webp',
      links: [
        { name: "GitHub", url: "https://github.com/AmigoVet" },
        { name: "Web", url: "https://www.amigovet.app/" },
        { name: "App Store", url: "https://apps.apple.com/co/app/amigovet/id6756260762" },
        { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.AmigoVet" },
      ]
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
      links: [
        { name: "Server Code", url: "https://github.com/Juan1mera/GoCab-SpringBoot" },
        { name: "App Code", url: "https://github.com/Juan1mera/GoCab-Flutter" },
      ],
    },
    {
      title: 'Chainly',
      description: 'A mobile application built in Flutter, designed for managing personal finances. It allows the registration of multiple wallets, whether bank accounts or cash, each with its own currency. It also enables the recording of cash outflows, inflows, and transfers between cards of different currencies using an API.',
      role: 'Full-Stack Developer',
      year: '2025',
      technologies: [
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'Dart', icon: <SiDart /> },
        { name: 'Supabase', icon: <SiSupabase /> },
        { name: 'SQLite', icon: <SiSqlite /> },
      ],
      image1: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/WalletApp/Mockup1.webp',
      image2: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/WalletApp/Mockup2.webp',
      image3: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/WalletApp/Mockup3.webp',
      links: [
        { name: "App Store", url: "https://apps.apple.com/co/app/chainly/id6756326431" },
      ],
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