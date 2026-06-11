import { useMemo } from "react";
import { SiAuth0, SiDart, SiFlutter, SiGooglemaps, SiMysql, SiNginx, SiSocketdotio, SiSpring, SiSqlite, SiSupabase } from "react-icons/si";
import BlurText from "../../../../components/BlurText";
import { FlowingMenu } from "../../../../components/FlowingMenu";
import { useLanguage } from "../../../../context/LanguageContext";


function AppSection() {
  const { t } = useLanguage();

  const appProjects = useMemo(() => [
    {
      title: t.work.projects.amigovetApp.title,
      description: t.work.projects.amigovetApp.description,
      role: t.work.projects.amigovetApp.role,
      year: '2025',
      technologies: [
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'Dart', icon: <SiDart /> },
        { name: 'SQLite', icon: <SiSqlite /> },
        { name: 'Spring Boot', icon: <SiSpring /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'NGinx', icon: <SiNginx /> },
        { name: 'Auth0', icon: <SiAuth0 /> },
      ],
      image1: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/f_auto,q_auto,w_800/v1768442531/Mockup1_o7k3sw.webp',
      image2: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/f_auto,q_auto,w_800/v1768442530/Mockup2_hy0lqx.webp',
      image3: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/f_auto,q_auto,w_800/v1768442531/Mockup3_d5ufgc.webp',
      links: [
        { name: "GitHub", url: "https://github.com/AmigoVet" },
        { name: "Web", url: "https://www.amigovet.app/" },
        { name: "App Store", url: "https://apps.apple.com/co/app/amigovet/id6756260762" },
        { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.AmigoVet" },
      ]
    },
    {
      title: t.work.projects.goCab.title,
      description: t.work.projects.goCab.description,
      role: t.work.projects.goCab.role,
      year: '2025',
      technologies: [
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'Dart', icon: <SiDart /> },
        { name: 'Spring Boot', icon: <SiSpring /> },
        { name: 'Socket.IO', icon: <SiSocketdotio /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Google Maps Api', icon: <SiGooglemaps /> },
      ],
      image1: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/f_auto,q_auto,w_800/v1768442721/Mockup1_derqhk.webp',
      image2: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/f_auto,q_auto,w_800/v1768442721/Mockup2_qwgl0u.webp',
      image3: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/f_auto,q_auto,w_800/v1768442720/Mockup3_kcr8bo.webp',
      links: [
        { name: "Server Code", url: "https://github.com/Juan1mera/GoCab-SpringBoot" },
        { name: "App Code", url: "https://github.com/Juan1mera/GoCab-Flutter" },
      ],
    },
    {
      title: t.work.projects.chainly.title,
      description: t.work.projects.chainly.description,
      role: t.work.projects.chainly.role,
      year: '2025',
      technologies: [
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'Dart', icon: <SiDart /> },
        { name: 'Supabase', icon: <SiSupabase /> },
        { name: 'SQLite', icon: <SiSqlite /> },
      ],
      image1: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/f_auto,q_auto,w_800/v1768442779/Mockup1_i5zm2q.webp',
      image2: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/f_auto,q_auto,w_800/v1768442780/Mockup2_ufstzs.webp',
      image3: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/f_auto,q_auto,w_800/v1768442779/Mockup3_uixxse.webp',
      links: [
        { name: "App Store", url: "https://apps.apple.com/co/app/chainly/id6756326431" },
      ],
    },
  ], [t]);

  return (
    <div className="w-full">
      <BlurText
        text={t.work.apps}
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