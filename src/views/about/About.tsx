import { CustomTitleSection } from "../../components/CustomTitleSection";
import CustomLink from "../../components/ui/CustomLink";

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
          <br /><br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br /><br />
          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
          varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus
          magna felis sollicitudin mauris. Integer in mauris eu nibh euismod
          gravida.
        </p>
      </div>

      <div className="min-w-screen flex items-center justify-center">
        <CustomLink text="Let's Talk" href="" />
      </div>

    </div>
  );
}

export default About;