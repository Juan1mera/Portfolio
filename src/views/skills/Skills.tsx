// src/views/skills/Skills.tsx
import LogoLoop from "../../components/LogoLoop";
import { techLogos } from "../../constants/techLogos";

function Skills() {
  return (
    <section className="bg-background-black py-16">
      <h3 className="pl-8 md:pl-20 font-bold text-3xl mb-8">Skills</h3>
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
  );
}

export default Skills;