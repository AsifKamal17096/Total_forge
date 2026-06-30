import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { revealItem } from '@/components/motion'

function ProjectCard({ project, onOpen }) {
  return (
    <motion.button
      type="button"
      variants={revealItem}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      onClick={() => onOpen(project)}
      className="group panel portfolio-card overflow-hidden rounded-[1.5rem] text-left sm:rounded-[2rem]"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48 md:h-64"
        />
      </div>
      <div className="space-y-3 p-4 sm:space-y-4 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="accent-soft rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em]">
            {project.categoryLabel}
          </span>
          <ArrowUpRight className="accent-icon h-5 w-5 shrink-0 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-[color:var(--text)] sm:text-xl md:text-2xl">{project.title}</h3>
          <p className="mt-2 line-clamp-3 text-xs leading-6 text-[color:var(--muted)] sm:text-sm sm:leading-7">{project.shortDescription}</p>
        </div>
      </div>
    </motion.button>
  )
}

export default ProjectCard
