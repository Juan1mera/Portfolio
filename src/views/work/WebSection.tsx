import BlurText from '../../components/BlurText';
import FlowingMenu from '../../components/FlowingMenu'

function WebSection() {

  const demoItems = [
    { link: '#', text: 'AmigoVet Web', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Zentry', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Administracion', image: 'https://picsum.photos/600/400?random=1' },
  ];

  return (
    <div className="w-full h-[600px] overflow-hidden">
      <BlurText
        text="WEBS"
        className="font-extrabold text-2xl md:text-4xl pl-10"
        animateBy="words"
        delay={300}
        direction="top"
      />
      <FlowingMenu items={demoItems} />
    </div>
  )
}

export default WebSection