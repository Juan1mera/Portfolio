import BlurText from '../../components/BlurText';
import FlowingMenu from '../../components/FlowingMenu';

function GameSection() {

// GameSection.tsx
const gameProjects = [
  {
    title: 'Mario Clone',
    description: 'Recreación 2D del clásico con mecánicas mejoradas.',
    role: 'Game Developer',
    year: '2023',
    technologies: ['Phaser.js', 'JavaScript'],
    image1: 'https://picsum.photos/600/400?random=8',
    image2: 'https://picsum.photos/600/400?random=9',
    linkViewCode: 'https://github.com/user/mario-clone',
  },
  // ...
];

  return (
    <div className="w-full h-[600px] overflow-hidden">
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