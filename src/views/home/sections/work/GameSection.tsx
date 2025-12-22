import {SiPython } from 'react-icons/si';
import BlurText from '../../../../components/BlurText';
import { FlowingMenu } from '../../../../components/FlowingMenu';

function GameSection() {

  const gameProjects = [
    {
      title: 'Mario Clone',
      description: 'A platform game with multiple levels, similar to the 1985 Mario game, using sprites taken from the internet, made entirely in Python with the PyGame library.',
      role: 'Game Developer',
      year: '2023',
      technologies: [
        { name: 'Python', icon: <SiPython /> },
      ],
      image1: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/CluckSoulsGame/Page1.webp',
      image2: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/CluckSoulsGame/Page2.webp',
      image3: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/CluckSoulsGame/Page3.webp',
      links: [
        { name: "GitHub", url: "https://github.com/Juan1mera/CluckSouls" },
      ],
    },
    {
      title: 'Space Shooter',
      description: 'A game with two difficulty levels, where the difficulty increases as time progresses in each level, made entirely in Python using the PyGame library.',
      role: 'Game Developer',
      year: '2023',
      technologies: [
        { name: 'Python', icon: <SiPython /> },
      ],
      image1: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/SpaceShooterGame/Page1.webp',
      image2: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/SpaceShooterGame/Page2.webp',
      image3: 'https://dpryofqwatjjupnrzoqz.supabase.co/storage/v1/object/public/Porfolio%20Personal/SpaceShooterGame/Page3.webp',
      links: [
        { name: "GitHub", url: "https://github.com/Juan1mera/Learning-Pygame/tree/main/space%20shooter" },
      ],
    },
  ];

  return (
    <div className="w-full">
        <BlurText
          text="GAMES"
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