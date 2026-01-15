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
      image1: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768443017/Page1_s6c5ju.webp',
      image2: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768443016/Page2_kwvpqt.webp',
      image3: 'https://res.cloudinary.com/dhwc0l0wz/image/upload/v1768443018/Page3_upvcht.webp',
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