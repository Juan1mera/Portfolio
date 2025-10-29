import BlurText from "../../components/BlurText";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col justify-start items-center gap-8 pt-52 pb-96 w-full px-6 md:px-0"
    >
      {/* Línea 1: Alineada a la IZQUIERDA */}
      <div className="w-full px-20 flex items-center gap-3 flex-wrap justify-start">
        <BlurText
          text="I'm a"
          className="p-2 md:text-4xl text-2xl "
          animateBy="words"
          delay={300}
          direction="top"
        />
        <BlurText
          text="FULL-STACK"
          className="font-extrabold text-4xl md:text-8xl text-purple-light"
          animateBy="words"
          delay={300}
          direction="top"
        />
      </div>

      {/* Línea 2: Alineada a la DERECHA */}
      <div className="w-full px-20 flex items-center gap-3 flex-wrap justify-end">
        <BlurText
          text="DEVELOPER"
          className="font-extrabold text-4xl md:text-8xl text-purple-light"
          animateBy="words"
          delay={300}
          direction="top"
        />
        <BlurText
          text="with experience"
          className="text-2xl md:text-4xl "
          animateBy="words"
          delay={300}
          direction="top"
        />
      </div>

      {/* Línea 3: CENTRADA */}
      <div className="w-full px-20 flex items-center gap-3 flex-wrap justify-center">
        <BlurText
          text="in"
          className="text-2xl md:text-4xl "
          animateBy="words"
          delay={300}
          direction="top"
        />
        <BlurText
          text="WEB, APPS & GAMING"
          className="font-extrabold text-4xl md:text-8xl "
          animateBy="words"
          delay={300}
          direction="top"
        />
      </div>
    </section>
  );
}

export default Home;