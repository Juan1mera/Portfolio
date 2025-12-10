import LogoLoop from "../../../../components/LogoLoop";
import { frameworksLogos, techLogos, toolsLogos } from "../../../../constants/techLogos";

function Skills() {
  return (
    <>
      <section className="bg-background-black py-5">
        <h3 className="pl-8 md:pl-20 font-light text-3xl">Technologies</h3>
        <div className="w-full overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={90}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
          />
        </div>
      </section>
      
      <section className="bg-background-black py-5">
        <h3 className="pl-8 md:pl-20 font-light text-3xl">Frameworks</h3>
        <div className="w-full overflow-hidden">
          <LogoLoop
            logos={frameworksLogos}
            speed={90}
            direction="right"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
          />
        </div>
      </section>
      
      <section className="bg-background-black py-5">
        <h3 className="pl-8 md:pl-20 font-light text-3xl">Tools</h3>
        <div className="w-full overflow-hidden">
          <LogoLoop
            logos={toolsLogos}
            speed={90}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
          />
        </div>
      </section>
    </>
  );
}

export default Skills;