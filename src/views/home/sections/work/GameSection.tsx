import {SiPython } from 'react-icons/si';
import BlurText from '../../../../components/BlurText';
import { FlowingMenu } from '../../../../components/FlowingMenu';
import { useLanguage } from '../../../../context/LanguageContext';

function GameSection() {
  const { t } = useLanguage();

  const gameProjects = [
    {
      title: t.work.projects.marioClone.title,
      description: t.work.projects.marioClone.description,
      role: t.work.projects.marioClone.role,
      year: '2023',
      technologies: [
        { name: 'Python', icon: <SiPython /> },
      ],
      image1: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768443017/Page1_s6c5ju.webp',
      image2: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768443016/Page2_kwvpqt.webp',
      image3: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768443018/Page3_upvcht.webp',
      links: [
        { name: "GitHub", url: "https://github.com/Juan1mera/CluckSouls" },
      ],
    },
    {
      title: t.work.projects.spaceShooter.title,
      description: t.work.projects.spaceShooter.description,
      role: t.work.projects.spaceShooter.role,
      year: '2023',
      technologies: [
        { name: 'Python', icon: <SiPython /> },
      ],
      image1: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768443057/Page1_jmmhfv.webp',
      image2: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768443058/Page2_lshqim.webp',
      image3: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768443059/Page3_j9hwmo.webp',
      links: [
        { name: "GitHub", url: "https://github.com/Juan1mera/Learning-Pygame/tree/main/space%20shooter" },
      ],
    },
  ];

  return (
    <div className="w-full">
        <BlurText
          text={t.work.games}
          className="font-extrabold text-2xl md:text-4xl pl-10"
          animateBy="words"
          delay={300}
          direction="top"
        />
        <FlowingMenu items={gameProjects} />
    </div>
  )
}

export default GameSection