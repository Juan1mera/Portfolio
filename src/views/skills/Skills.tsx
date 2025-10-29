import LogoLoop from "../../components/LogoLoop"
import { techLogos } from "../../constants/techLogos"

function Skills() {
  return (
    <div className="bg-background-black py-10">
      <h3 className="pl-20 font-bold text-3xl">Skills</h3>
      <LogoLoop
        logos={techLogos}
        speed={90}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        ariaLabel="Technology partners"
      />
    </div>
  )
}

export default Skills