import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'

function Modal({ project, onClose }) {
  useEffect(() => {
    if (!project) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose, project])

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            className="panel max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem]"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', stiffness: 200, damping: 24 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-[color:var(--surface-border)] bg-[color:var(--bg-elevated)] px-4 py-3 backdrop-blur-xl sm:px-6 sm:py-4">
              <div>
                <p className="accent-text text-xs uppercase tracking-[0.35em]">{project.categoryLabel}</p>
                <h3 className="mt-2 font-heading text-lg font-bold sm:text-2xl">{project.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="shrink-0 rounded-full border border-[color:var(--surface-border)] p-2 transition duration-300 hover:scale-105 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover sm:h-72 md:h-96"
              loading="lazy"
              decoding="async"
            />

            <div className="space-y-6 p-6 sm:p-8">
              <p className="text-base leading-8 text-[color:var(--muted)]">{project.description}</p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="surface-card rounded-full px-4 py-2 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="accent-solid inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1"
              >
                Live Demo
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default Modal
