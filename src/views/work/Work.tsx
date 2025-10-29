import FlowingMenu from "../../components/FlowingMenu";

function Work() {
  const demoItems = [
    { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
  ];

  return (
    <section className="w-full  py-16" id="works">
      <h3 className="pl-8 md:pl-20 font-bold text-3xl mb-8 text-white">Work</h3>
      <div className="w-full h-[600px] overflow-hidden">
        <FlowingMenu items={demoItems} />
      </div>
    </section>
  );
}

export default Work;