import { CustomTitleSection } from "../../components/CustomTitleSection";
import { useLanguage } from "../../context/LanguageContext";

function Terms() {
  const { t } = useLanguage();

  return (
    <div
      id="terms"
      className="flex flex-col justify-start items-start gap-6 sm:gap-8 pt-16 sm:pt-20 md:pt-28 pb-16 sm:pb-20 md:pb-28 w-full px-4 sm:px-6 md:px-12"
    >
      <div className="ml-4 sm:ml-8 md:ml-16 lg:ml-28">
        <CustomTitleSection
          topTexts={t.terms.titleTop}
          bottomTexts={t.terms.titleBottom}
          purpleWord={t.terms.titlePurple}
        />
      </div>

      {/* Contenido centrado */}
      <div className="w-full flex items-center justify-center px-4">
        <div className="text-base sm:text-lg leading-relaxed max-w-5xl space-y-4 sm:space-y-6 text-text-color/90">
          {t.terms.sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-purple-light">
                {section.title}
              </h3>
              <p>
                {section.content}
              </p>
            </div>
          ))}

          <div className="pt-3 sm:pt-4 border-t border-gray-700">
            <p className="text-sm font-light text-text-color/70">
              {t.terms.lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;