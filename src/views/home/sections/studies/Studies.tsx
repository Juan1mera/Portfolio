// src/views/home/sections/studies/Studies.tsx
import React from 'react';
import { useLanguage } from '../../../../context/LanguageContext';
import { CustomTitleSection } from '../../../../components/CustomTitleSection';

const Studies: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="studies"
      className="flex flex-col justify-start items-start gap-12 py-24 w-full px-6 md:px-12  relative overflow-hidden"
    >

      <div className="ml-6 sm:ml-12 md:ml-20 lg:ml-28">
        <CustomTitleSection
          topTexts={t.studies.titleTop}
          bottomTexts={t.studies.titleBottom}
          purpleWord={t.studies.titlePurple}
        />
      </div>

      {/* Studies timeline/cards grid */}
      <div className="w-full flex justify-center px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl w-full">
          {t.studies.items.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-background/50 border border-white/5 dark:border-white/5 transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden"
            >
              {/* Card border glow effect */}
              <div className="absolute inset-0 bg-linear-to-tr from-purple-light/0 via-purple-light/0 to-purple-light/5 opacity-0  transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-4">
                {/* Year/Period Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-purple-light/10 text-purple-light border border-purple-light/20">
                    {item.period}
                  </span>

                  {/* Decorative dot decoration */}
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-light opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-light"></span>
                  </span>
                </div>

                {/* Institution & Degree */}
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-text-light group-hover:text-purple-light transition-colors duration-300">
                    {item.institution}
                  </h4>
                  <p className="text-sm font-semibold tracking-wide text-purple-light/80 mt-2">
                    {item.degree}
                  </p>
                </div>

                {/* Localized Details */}
                <p className="text-sm sm:text-base text-text-color/80 leading-relaxed font-light mt-2">
                  {item.details}
                </p>
              </div>

              {/* Bottom stylized line highlight */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-purple-light group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studies;
