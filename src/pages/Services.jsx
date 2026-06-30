import { motion } from 'framer-motion'
import { ArrowRight, Bot, Clapperboard, Code2, Globe2, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import MotionSection from '@/components/MotionSection'
import { revealItem } from '@/components/motion'
import PageSeo from '@/components/PageSeo'
import { services } from '@/data/services'

const serviceIcons = {
  mobile: Smartphone,
  ai: Bot,
  video: Clapperboard,
  web: Globe2,
}

function Services() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <PageSeo
        title="Services"
        description="Explore The Total Forge service stack across mobile development, AI automation, video production, and website development."
        image="https://picsum.photos/seed/totalforge-services/1200/630"
      />

      {services.map((service, index) => {
        const Icon = serviceIcons[service.id]
        const isEven = index % 2 === 0

        return (
          <MotionSection key={service.id} id={service.id} className="section-shell flex items-center">
            <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <motion.div
                variants={revealItem}
                className={`space-y-6 ${isEven ? '' : 'lg:order-2'}`}
              >
                <div className="accent-soft inline-flex rounded-[1.75rem] p-5">
                  <Icon className="h-9 w-9" />
                </div>
                <div>
                  <p className="accent-text text-xs uppercase tracking-[0.35em]">Service</p>
                  <h1 className="mt-4 font-heading text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                    {service.title}
                  </h1>
                </div>
                <p className="max-w-xl text-base leading-8 text-[color:var(--muted)]">
                  {service.description}
                </p>
                <p className="max-w-xl text-base leading-8 text-[color:var(--muted)]">
                  {service.detail}
                </p>
                <Link
                  to={`/portfolio?filter=${service.id}#portfolio-grid`}
                  className="accent-link inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em]"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                variants={revealItem}
                className={`panel rounded-[2.5rem] p-6 sm:p-8 ${isEven ? '' : 'lg:order-1'}`}
              >
                <p className="accent-text text-xs uppercase tracking-[0.35em]">Tech Stack</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {service.tech.map((item) => (
                    <span
                      key={item}
                      className="surface-card inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium"
                    >
                      <Code2 className="accent-icon h-4 w-4" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="surface-card rounded-[1.75rem] p-5">
                    <p className="accent-text text-xs uppercase tracking-[0.28em]">Outcome</p>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                      Stronger launches, cleaner delivery systems, and products designed for
                      sustainable growth.
                    </p>
                  </div>
                  <div className="surface-card rounded-[1.75rem] p-5">
                    <p className="accent-text text-xs uppercase tracking-[0.28em]">Execution</p>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                      Strategy, production, and polish come together in a workflow built to ship
                      with confidence.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </MotionSection>
        )
      })}
    </motion.main>
  )
}

export default Services
