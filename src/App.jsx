import { Suspense, lazy, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ThemeProvider from '@/components/ThemeProvider'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Services = lazy(() => import('@/pages/Services'))
const Portfolio = lazy(() => import('@/pages/Portfolio'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function RouteLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="flex items-center gap-4 rounded-full border border-[color:var(--surface-border)] bg-[color:var(--surface)] px-6 py-4 shadow-[var(--shadow)] backdrop-blur-xl">
        <span className="accent-icon h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent border-t-transparent" />
        <span className="text-sm uppercase tracking-[0.35em] text-[color:var(--muted)]">
          Heating the forge
        </span>
      </div>
    </div>
  )
}

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const scrollToTarget = () => {
      if (location.hash) {
        const element = document.querySelector(location.hash)

        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const timer = window.setTimeout(scrollToTarget, 60)
    return () => window.clearTimeout(timer)
  }, [location.hash, location.pathname, location.search])

  return null
}

function AppShell() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <ScrollManager />
      <Navbar />
      <Suspense fallback={<RouteLoader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={`${location.pathname}${location.search}`}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <div className="forge-glow" />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  )
}

export default App
