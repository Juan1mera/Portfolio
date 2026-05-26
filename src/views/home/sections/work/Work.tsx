import { CustomTitleSection } from "../../../../components/CustomTitleSection";
import { useLanguage } from "../../../../context/LanguageContext";
import AppSection from "./AppSection";
import GameSection from "./GameSection";
import WebSection from "./WebSection";

function Work() {
  const { t } = useLanguage();

  return (
    <section 
      id="works"
      className="flex flex-col justify-start items-end gap-8 w-full"
    >
      <div className="mr-6 sm:mr-12 md:mr-20 lg:mr-28">
        <CustomTitleSection
          topTexts={t.work.titleTop}
          bottomTexts={t.work.titleBottom}
          purpleWord={t.work.titlePurple}
        />
      </div>
      <AppSection />
      <WebSection />
      <GameSection />
    </section>
  );
}

export default Work;