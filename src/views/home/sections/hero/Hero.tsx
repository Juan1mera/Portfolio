import BlurText from "../../../../components/BlurText";

function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-start items-center gap-4 sm:gap-6 md:gap-8 pt-32 sm:pt-40 md:pt-52 pb-48 sm:pb-64 md:pb-96 w-full px-4 sm:px-8 md:px-12 lg:px-20"
    >
      {/* Línea 1: Alineada a la IZQUIERDA */}
      <div className="w-full flex items-center gap-2 sm:gap-3 flex-wrap justify-start">
        <BlurText
          text="I'm a"
          className="p-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          animateBy="words"
          delay={300}
          direction="top"
        />
        <BlurText
          text="FULL-STACK"
          className="font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-purple-light"
          animateBy="words"
          delay={300}
          direction="top"
        />
      </div>

      {/* Línea 2: Alineada a la DERECHA */}
      <div className="w-full flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
        <BlurText
          text="DEVELOPER"
          className="font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-purple-light"
          animateBy="words"
          delay={300}
          direction="top"
        />
        <BlurText
          text="with experience"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          animateBy="words"
          delay={300}
          direction="top"
        />
      </div>

      {/* Línea 3: CENTRADA */}
      <div className="w-full flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
        <BlurText
          text="in"
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          animateBy="words"
          delay={300}
          direction="bottom"
        />
        <BlurText
          text="WEB, APPS & GAMING"
          className="font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
          animateBy="words"
          delay={300}
          direction="bottom"
        />
      </div>
    </section>
  );
}

export default Hero;