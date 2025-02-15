import { useRef } from 'react';
import Dock from '../../components/Dock/Dock';
import './App.css';
import { BsTelegram, BsLinkedin, BsMailboxFlag, BsGithub, BsDatabaseFill, BsFillPersonFill, BsCameraFill } from "react-icons/bs";
import Projects from '../projects/Projects';
import About from '../about/About';
import Home from './Home';
import Galery from '../galery/Galery';
function App() {

  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);

  // Ítems del Dock con navegación
  const items = [
    { icon: <BsFillPersonFill size={18} />, label: 'About', onClick: () => aboutRef.current?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: <BsDatabaseFill size={18} />, label: 'Projects', onClick: () => projectsRef.current?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: <BsCameraFill size={18} />, label: 'Gallery', onClick: () => galleryRef.current?.scrollIntoView({ behavior: 'smooth' }) },
    { icon: <BsGithub size={18} />, label: 'Github', onClick: () => alert('Contact!') },
    { icon: <BsLinkedin size={18} />, label: 'Linkedin', onClick: () => alert('Contact!') },
    { icon: <BsTelegram size={18} />, label: 'Telegram', onClick: () => alert('Contact!') },
    { icon: <BsMailboxFlag size={18} />, label: 'Gmail', onClick: () => alert('Contact!') },
  ];

  return (
    <div className="App">
      <div className="snap-container">
        <section ref={homeRef} className="snap-section">
          <Home />
        </section>
        <section ref={aboutRef} className="snap-section">
          <About />
        </section>

        <section ref={projectsRef} className="snap-section">
          <Projects />
        </section>

        <section ref={galleryRef} className="snap-section">
          <Galery />
        </section>
      </div>

      <div className="dock-container">
        <Dock items={items} panelHeight={58} baseItemSize={50} magnification={70} />
      </div>
    </div>
  );
}

export default App;
