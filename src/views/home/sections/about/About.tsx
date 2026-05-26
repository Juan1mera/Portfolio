import { CustomTitleSection } from "../../../../components/CustomTitleSection";
import CustomLink from "../../../../components/ui/CustomLink";
import { useLanguage } from "../../../../context/LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <div
      id="about"
      className="flex flex-col justify-start items-start gap-8 pt-28 pb-28 w-full px-6 md:px-12"
    >
      <div className="ml-6 sm:ml-12 md:ml-20 lg:ml-28">
        <CustomTitleSection
          topTexts={t.about.titleTop}
          bottomTexts={t.about.titleBottom}
          purpleWord={t.about.titlePurple}
        />
      </div>


      {/* Párrafo centrado */}
      <div className="w-full flex items-center justify-center px-4">
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-5xl text-text-color/90">
          <p>{t.about.p1}</p>
          <br />
          <p>{t.about.p2}</p>
          <br />
          <p>{t.about.p3}</p>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-4">
        <CustomLink text={t.about.letsTalk} href="#footer" />
      </div>

    </div>
  );
}

export default About;