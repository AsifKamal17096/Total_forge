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
      className="group panel masonry-item w-full overflow-hidden rounded-[2rem] text-left"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="accent-soft rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em]">
            {project.categoryLabel}
          </span>
          <ArrowUpRight className="accent-icon h-5 w-5 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <div>
          <h3 className="font-heading text-2xl font-bold text-[color:var(--text)]">{project.title}</h3>
          <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{project.shortDescription}</p>
        </div>
      </div>
    </motion.button>
  )
}

export default ProjectCard
