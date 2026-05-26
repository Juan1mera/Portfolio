import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Work from "./sections/work/Work";
import Hero from "./sections/hero/Hero";
import Contact from "./sections/contact/Contact";
import Studies from "./sections/studies/Studies";

function Home() {
  return (
      <main className="pt-20 scroll-smooth">
        <Hero />
        <Skills />
        <About />
        <Studies />
        <Work />
        <Contact />
      </main>
  );
}

export default Home;