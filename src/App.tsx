import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './views/footer/Footer'

import Home from './views/home/Home'
import Skills from './views/home/sections/skills/Skills'
import About from './views/home/sections/about/About'
import Work from './views/home/sections/work/Work'
import { Contact } from 'lucide-react'
import Support from './views/support/Support'
import Terms from './views/terms/Terms'

// Layout que tiene NavBar + Footer + scroll en la home
function MainLayout() {
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

function App() {
  const location = useLocation()

  // Si estamos en /support o /terms, quitamos el padding-top del NavBar porque ya no hay scroll
  const isHome = location.pathname === '/'

  return (
    <>
      {/* NavBar siempre visible */}
      <NavBar />

      <Routes>
        {/* Página principal con todo el scroll */}
        <Route path="/" element={<MainLayout />} />

        {/* Página de Support */}
        <Route
          path="/support"
          element={
            <main className={isHome ? 'pt-20' : 'pt-20 min-h-screen bg-gray-50'}>
              <Support />
            </main>
          }
        />

        {/* Página de Terms */}
        <Route
          path="/terms"
          element={
            <main className={isHome ? 'pt-20' : 'pt-20 min-h-screen bg-gray-50'}>
              <Terms />
            </main>
          }
        />

        {/* Opcional: 404 */}
        <Route path="*" element={<MainLayout />} />
      </Routes>

      {/* Footer solo en la home */}
      {location.pathname === '/' && <Footer />}
    </>
  )
}

export default App