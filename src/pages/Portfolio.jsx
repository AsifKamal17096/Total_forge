import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import MotionSection from '@/components/MotionSection'
import { revealItem } from '@/components/motion'
import Modal from '@/components/Modal'
import PageSeo from '@/components/PageSeo'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import { useLocation, useNavigate } from 'react-router-dom'

const filters = ['all', 'mobile', 'ai', 'video', 'web']
const filterLabels = {
  all: 'All',
  mobile: 'Mobile',
  ai: 'AI',
  video: 'Video',
  web: 'Web',
}

function getFilterFromSearch(search) {
  const filter = new URLSearchParams(search).get('filter')?.toLowerCase()
  return filters.includes(filter) ? filter : 'all'
}

function Portfolio() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState(() => getFilterFromSearch(location.search))
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    setActiveFilter(getFilterFromSearch(location.search))
  }, [location.search])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects
    }

    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const handleFilterChange = (filter) => {
    const params = new URLSearchParams(location.search)

    if (filter === 'all') {
      params.delete('filter')
    } else {
      params.set('filter', filter)
    }

    const search = params.toString()
    setActiveFilter(filter)
    navigate(
      {
        pathname: '/portfolio',
        search: search ? `?${search}` : '',
        hash: '#portfolio-grid',
      },
      { replace: false },
    )
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <PageSeo
        title="Portfolio"
        description="Browse twelve featured projects from The Total Forge across mobile, AI, video, and web product delivery."
        image="https://picsum.photos/seed/totalforge-portfolio/1200/630"
      />

      <MotionSection className="section-shell">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div variants={revealItem} className="max-w-3xl">
            <p className="accent-text text-xs uppercase tracking-[0.35em]">Portfolio</p>
            <h1 className="mt-4 font-heading text-3xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Twelve forged projects across four disciplines.
            </h1>
            <p className="mt-5 text-base leading-8 text-[color:var(--muted)]">
              Filter the work by service category, then open any project to view its full summary,
              supporting stack, and demo placeholder.
            </p>
          </motion.div>

          <motion.div
            variants={revealItem}
            className="panel mt-10 flex flex-wrap gap-3 rounded-[2rem] p-4"
            id="portfolio-grid"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilterChange(filter)}
                className={`surface-hover rounded-full px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition duration-300 sm:px-4 sm:py-3 sm:text-sm sm:tracking-[0.22em] ${
                  activeFilter === filter
                    ? 'accent-solid'
                    : 'bg-[color:var(--surface)] text-[color:var(--muted)] hover:text-[color:var(--text)]'
                }`}
              >
                {filterLabels[filter]}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="portfolio-grid mt-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </MotionSection>

      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </motion.main>
  )
}

export default Portfolio
