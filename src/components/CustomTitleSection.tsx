import BlurText from "./BlurText";

interface CustomTitleSectionProps {
  topTexts: string[];
  bottomTexts: string[];
  purpleWord?: string;
}

export const CustomTitleSection: React.FC<CustomTitleSectionProps> = ({
  topTexts,
  bottomTexts,
  purpleWord = "",
}) => {
  return (
    <div className="flex flex-col">
      {/* Top line */}
      <div className="flex gap-2 sm:gap-3 md:gap-4">
        {topTexts.map((word, idx) => (
          <BlurText
            key={idx}
            text={word}
            className={`font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl ${
              purpleWord === word ? "text-purple-light" : ""
            }`}
            animateBy="words"
            delay={300}
            direction="top"
          />
        ))}
      </div>

      {/* Bottom line (slightly indented) */}
      <div className="flex gap-2 sm:gap-3 md:gap-4 ml-8 sm:ml-16 md:ml-32 lg:ml-48 xl:ml-80 mt-2 sm:mt-3 md:mt-4">
        {bottomTexts.map((word, idx) => (
          <BlurText
            key={idx}
            text={word}
            className={`font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl ${
              purpleWord === word ? "text-purple-light" : ""
            }`}
            animateBy="words"
            delay={300}
            direction="top"
          />
        ))}
      </div>
    </div>
  );
};