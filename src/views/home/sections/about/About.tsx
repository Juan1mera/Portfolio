import { CustomTitleSection } from "../../../../components/CustomTitleSection";
import CustomLink from "../../../../components/ui/CustomLink";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col justify-start items-start gap-8 pt-28 pb-28 w-full px-6 md:px-12"
    >
      <div className="ml-28">
        <CustomTitleSection
          topTexts={["GET", "TO"]}
          bottomTexts={["KNOW", "ME"]}
          purpleWord="ME"
        />
      </div>


      {/* Párrafo centrado */}
      <div className="min-w-screen flex items-center justify-center">
        <p className="text-2xl leading-relaxed max-w-5xl">
          I'm Juan José Mera Barrera, 18 years old, and currently in my fifth semester of Applied Informatics and Information Technologies at Belgorod State National Research University (BelGU), Russia. I've been passionate about programming since I was 10, starting with robotics using Arduino and later shifting my full focus to software development.
          <br /><br />
          I’m obsessed with crafting beautiful, intuitive, and user-friendly interfaces while optimizing performance in both web applications and servers. I have two years of hands-on programming experience, though no formal work history yet.
          <br /><br />
          I’m eager to join a team where I can contribute my best, collaborate effectively, and help drive innovative projects forward.
        </p>
      </div>

      <div className="min-w-screen flex items-center justify-center">
        <CustomLink text="Let's Talk" href="#footer" />
      </div>

    </div>
  );
}

export default About;