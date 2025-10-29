import { CustomTitleSection } from "../../components/CustomTitleSection";
import FlowingMenu from "../../components/FlowingMenu";

function Work() {
  const demoItems = [
    { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
  ];

  return (
    <section 
      id="works"
      className="flex flex-col justify-start items-end gap-8 w-full"
    >
      <div className="mr-28">
        <CustomTitleSection
          topTexts={["CHECK", "OUT"]}
          bottomTexts={["MY", "WORK"]}
          purpleWord="MY"
        />
      </div>
      <div className="w-full h-[600px] overflow-hidden">
        <FlowingMenu items={demoItems} />
      </div>
    </section>
  );
}

export default Work;