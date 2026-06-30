export const revealContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
}

export const revealItem = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 130,
      damping: 16,
    },
  },
}
