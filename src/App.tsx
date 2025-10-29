// src/App.tsx
import NavBar from './components/NavBar'
import About from './views/about/About'
import Contact from './views/contact/Contact'
import Footer from './views/footer/Footer'
import Home from './views/home/Home'
import Skills from './views/skills/Skills'
import Work from './views/work/Work'

function App() {

  return (
    <>
      <NavBar />
      <main className="pt-20 scroll-smooth">
        <Home />
        <Skills />
        <About />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App