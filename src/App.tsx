import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './views/footer/Footer'
import Home from './views/home/Home'

// Rutas secundarias: lazy para no cargarlas con el home
const Support = lazy(() => import('./views/support/Support'))
const Terms = lazy(() => import('./views/terms/Terms'))
const NotFound = lazy(() => import('./views/errors/NotFound'))

function App() {
  return (
    <>
      {/* NavBar siempre visible */}
      <NavBar />

      <Suspense fallback={<main className="pt-20 min-h-screen" />}>
        <Routes>
          {/* Página principal con todo el scroll */}
          <Route path="/" element={<Home />} />

          <Route
            path="/support"
            element={
              <main className="pt-20 min-h-screen">
                <Support />
              </main>
            }
          />

          <Route
            path="/terms"
            element={
              <main className="pt-20 min-h-screen">
                <Terms />
              </main>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  )
}

export default App
