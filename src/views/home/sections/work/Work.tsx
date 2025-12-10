import { CustomTitleSection } from "../../../../components/CustomTitleSection";
import AppSection from "./AppSection";
import GameSection from "./GameSection";
import WebSection from "./WebSection";

function Work() {

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
      <AppSection />
      <WebSection />
      <GameSection />
    </section>
  );
}

export default Work;