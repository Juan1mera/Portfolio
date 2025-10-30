import BlurText from '../../components/BlurText';
import FlowingMenu from '../../components/FlowingMenu';

function GameSection() {

    const demoItems = [
    { link: '#', text: 'Mario Clone', image: 'https://picsum.photos/600/400?random=1' },
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
        <FlowingMenu items={demoItems} />
    </div>
  )
}

export default GameSection