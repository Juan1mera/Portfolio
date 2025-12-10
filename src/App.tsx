import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './views/footer/Footer'

import Support from './views/support/Support'
import Terms from './views/terms/Terms'
import NotFound from './views/errors/NotFound'
import Home from './views/home/Home'


function App() {
  return (
    <>
      {/* NavBar siempre visible */}
      <NavBar />

      <Routes>
        {/* Página principal con todo el scroll */}
        <Route path="/" element={<Home />} />

        {/* Página de Support */}
        <Route
          path="/support"
          element={
            <main className={'pt-20 min-h-screen '}>
              <Support />
            </main>
          }
        />

        {/* Página de Terms */}
        <Route
          path="/terms"
          element={
            <main className={'pt-20 min-h-screen '}>
              <Terms />
            </main>
          }
        />

        {/* Opcional: 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

       <Footer />
    </>
  )
}

export default App