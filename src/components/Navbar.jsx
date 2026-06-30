import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Logo from '@/components/Logo'
import ThemeToggle from '@/components/ThemeToggle'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18)

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[70] px-4 pt-4 sm:px-6 lg:px-10"
        animate={{
          y: 0,
          opacity: isScrolled ? 1 : 0.92,
        }}
      >
        <div
          className={`mx-auto flex w-full max-w-7xl min-w-0 items-center justify-between gap-4 rounded-full border px-4 py-3 transition-all duration-300 sm:px-5 ${
            isScrolled
              ? 'border-[color:var(--surface-border)] bg-[color:var(--bg-elevated)] shadow-[var(--shadow)] backdrop-blur-xl'
              : 'border-transparent bg-[color:var(--surface)] backdrop-blur-md'
          }`}
        >
          <Logo compact />

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `surface-hover rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                    isActive
                      ? 'accent-soft'
                      : 'text-[color:var(--muted)] hover:text-[color:var(--text)]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
              onClick={() => setIsMenuOpen((currentState) => !currentState)}
              className="rounded-full border border-[color:var(--surface-border)] bg-[color:var(--surface)] p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            className="fixed inset-0 z-[65] flex items-start justify-center bg-black/65 px-4 pt-28 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              className="panel w-full max-w-[90vw] rounded-[2rem] p-5"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `surface-hover rounded-2xl px-4 py-4 text-base font-medium transition duration-300 ${
                        isActive
                          ? 'accent-soft'
                          : 'text-[color:var(--muted)] hover:bg-[color:var(--surface)] hover:text-[color:var(--text)]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default Navbar
