import BlurText from "../../components/BlurText";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-start items-center gap-6 pt-44 w-full px-6 md:px-0"
    >
      {/* Línea 1: Alineada a la IZQUIERDA */}
      <div className="w-full px-20 flex items-end gap-3 flex-wrap justify-start">
        <BlurText
          text="I'm a"
          className="p-2 md:text-6xl text-3xl "
          animateBy="words"
          delay={300}
          direction="top"
        />
        <BlurText
          text="FULL-STACK"
          className="font-extrabold text-5xl md:text-9xl text-purple-light"
          animateBy="words"
          delay={300}
          direction="top"
        />
      </div>

      {/* Línea 2: Alineada a la DERECHA */}
      <div className="w-full px-20 flex items-end gap-3 flex-wrap justify-end">
        <BlurText
          text="DEVELOPER"
          className="font-extrabold text-5xl md:text-9xl text-purple-light"
          animateBy="words"
          delay={300}
          direction="top"
        />
        <BlurText
          text="with experience"
          className="text-3xl md:text-6xl "
          animateBy="words"
          delay={300}
          direction="top"
        />
      </div>

      {/* Línea 3: CENTRADA */}
      <div className="w-full px-20 flex items-center gap-3 flex-wrap justify-center">
        <BlurText
          text="in"
          className="text-3xl md:text-6xl "
          animateBy="words"
          delay={300}
          direction="top"
        />
        <BlurText
          text="WEB, APPS & GAMING"
          className="font-extrabold text-5xl md:text-9xl "
          animateBy="words"
          delay={300}
          direction="top"
        />
      </div>
    </section>
  );
}

export default Home;