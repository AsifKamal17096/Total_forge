import { AnimatePresence, motion } from 'framer-motion'
import { MoonStar, SunMedium } from 'lucide-react'
import { useTheme } from '@/components/theme-context'

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="surface-hover relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[color:var(--surface-border)] bg-[color:var(--surface)] text-[color:var(--text)] transition-transform duration-300 hover:scale-105"
      aria-label={`Activate ${isDark ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ opacity: 0, scale: 0.4, rotate: -120 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.4, rotate: 120 }}
          transition={{ type: 'spring', stiffness: 280, damping: 18 }}
          className="absolute"
        >
          {isDark ? <MoonStar className="accent-icon h-5 w-5" /> : <SunMedium className="accent-icon h-5 w-5" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export default ThemeToggle
