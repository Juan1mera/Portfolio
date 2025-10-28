import NavBar from './components/NavBar'
import About from './views/about/About'
import Contact from './views/contact/contact'
import Footer from './views/footer/Footer'
import Home from './views/home/Home'
import Skills from './views/skills/Skills'
import Work from './views/work/Work'

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <Skills />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default App
