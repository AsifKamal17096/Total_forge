import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { revealItem } from '@/components/motion'

function AnimatedCounter({ value, suffix = '', label, prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })

  useEffect(() => {
    if (!isInView) {
      return undefined
    }

    const duration = 1000
    let startTime

    const easeOutQuart = (t) => 1 - (1 - t) ** 4

    const updateCounter = (timestamp) => {
      if (!startTime) {
        startTime = timestamp
      }

      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(easeOutQuart(progress) * value))

      if (progress < 1) {
        window.requestAnimationFrame(updateCounter)
      }
    }

    const animationFrame = window.requestAnimationFrame(updateCounter)
    return () => window.cancelAnimationFrame(animationFrame)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      variants={revealItem}
      className="panel rounded-[2rem] px-6 py-7 text-left"
    >
      <p className="font-heading text-4xl font-bold text-[color:var(--text)] sm:text-5xl">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">{label}</p>
    </motion.div>
  )
}

export default AnimatedCounter
