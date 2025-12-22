import LogoLoop from "../../../../components/LogoLoop";
import { frameworksLogos, techLogos, toolsLogos } from "../../../../constants/techLogos";

function Skills() {
  return (
    <>
      <section className="bg-background-black py-3 sm:py-4 md:py-5">
        <h3 className="pl-4 sm:pl-6 md:pl-8 lg:pl-20 font-light text-xl sm:text-2xl md:text-3xl">Technologies</h3>
        <div className="w-full overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={90}
            direction="left"
            logoHeight={32} 
            gap={24} 
            pauseOnHover
            scaleOnHover
          />
        </div>
      </section>
      
      <section className="bg-background-black py-3 sm:py-4 md:py-5">
        <h3 className="pl-4 sm:pl-6 md:pl-8 lg:pl-20 font-light text-xl sm:text-2xl md:text-3xl">Frameworks</h3>
        <div className="w-full overflow-hidden">
          <LogoLoop
            logos={frameworksLogos}
            speed={90}
            direction="right"
            logoHeight={32}
            gap={24}
            pauseOnHover
            scaleOnHover
          />
        </div>
      </section>
      
      <section className="bg-background-black py-3 sm:py-4 md:py-5">
        <h3 className="pl-4 sm:pl-6 md:pl-8 lg:pl-20 font-light text-xl sm:text-2xl md:text-3xl">Tools</h3>
        <div className="w-full overflow-hidden">
          <LogoLoop
            logos={toolsLogos}
            speed={90}
            direction="left"
            logoHeight={32}
            gap={24}
            pauseOnHover
            scaleOnHover
          />
        </div>
      </section>
    </>
  );
}

export default Skills;