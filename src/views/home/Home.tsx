import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Work from "./sections/work/Work";
import Hero from "./sections/hero/Hero";
import Contact from "./sections/contact/Contact";

function Home() {
  return (
      <main className="pt-20 scroll-smooth">
        <Hero />
        <Skills />
        <About />
        <Work />
        <Contact />
      </main>
  );
}

export default Home;