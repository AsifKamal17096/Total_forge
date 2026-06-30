import { motion } from 'framer-motion'
import { revealContainer } from '@/components/motion'

function MotionSection({ children, className = '', id }) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={revealContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </motion.section>
  )
}

export default MotionSection
