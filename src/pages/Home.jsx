import { motion } from 'framer-motion'
import { ArrowRight, Bot, ChevronDown, Clapperboard, Globe2, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedCounter from '@/components/AnimatedCounter'
import MotionSection from '@/components/MotionSection'
import { revealItem } from '@/components/motion'
import PageSeo from '@/components/PageSeo'
import { projects } from '@/data/projects'
import { services } from '@/data/services'

const serviceIcons = {
  mobile: Smartphone,
  ai: Bot,
  video: Clapperboard,
  web: Globe2,
}

const stats = [
  { label: 'Projects Delivered', value: 12, suffix: '+' },
  { label: 'Services', value: 4 },
  { label: 'Satisfaction', value: 100, suffix: '%' },
  { label: 'Support', value: 24, suffix: '/7' },
]

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)

function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <PageSeo
        title="Home"
        description="The Total Forge builds mobile apps, AI automation, websites, and video content that turn ambitious ideas into production-ready digital experiences."
        image="https://picsum.photos/seed/totalforge-home/1200/630"
      />

      <MotionSection className="section-shell flex items-center" id="top">
        <div className="grid-overlay absolute inset-0 opacity-70" />
        <motion.div
          className="mesh-orb left-[8%] top-28 h-44 w-44"
          animate={{ x: [0, 26, -12, 0], y: [0, -18, 16, 0], scale: [1, 1.15, 0.92, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="mesh-orb right-[10%] top-1/3 h-72 w-72"
          animate={{ x: [0, -20, 12, 0], y: [0, 28, -16, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="mesh-orb bottom-20 left-1/3 h-56 w-56"
          animate={{ x: [0, 18, -10, 0], y: [0, 14, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-8">
            <motion.p
              variants={revealItem}
              className="accent-text inline-flex rounded-full border border-[color:var(--accent-soft-border)] bg-[color:var(--surface)] px-4 py-2 text-xs uppercase tracking-[0.35em]"
            >
              Digital Craft. Built to Last.
            </motion.p>
            <motion.div variants={revealItem} className="space-y-5">
              <h1 className="max-w-4xl font-heading text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
                Forging Digital Excellence
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
                We build mobile apps, AI automation, websites, and video content.
              </p>
            </motion.div>
            <motion.div variants={revealItem} className="flex flex-wrap gap-3">
              {['Mobile Apps', 'AI Automation', 'Video Production', 'Web Platforms'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[color:var(--surface-border)] px-4 py-2 text-sm text-[color:var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div variants={revealItem} className="panel rounded-[2rem] p-6 sm:p-8">
            <p className="accent-text text-xs uppercase tracking-[0.35em]">Production Snapshot</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="surface-card rounded-[1.5rem] p-5">
                <p className="font-heading text-3xl font-bold">Robust Systems</p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                  Architected for scale, clarity, and long-term maintainability.
                </p>
              </div>
              <div className="surface-card rounded-[1.5rem] p-5">
                <p className="font-heading text-3xl font-bold">Fast Delivery</p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                  Lean workflows keep momentum high without compromising polish.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <a
          href="#home-services"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-full border border-[color:var(--surface-border)] p-2"
          >
            <ChevronDown className="accent-icon h-4 w-4" />
          </motion.span>
        </a>
      </MotionSection>

      <MotionSection className="section-shell" id="home-services">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center">
          <motion.div variants={revealItem} className="mb-10 max-w-2xl">
            <p className="accent-text text-xs uppercase tracking-[0.35em]">Services</p>
            <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Four disciplines. One forge.
            </h2>
            <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">
              We combine technical depth, creative execution, and production rigor to help brands
              launch faster and grow with confidence.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = serviceIcons[service.id]

              return (
                <motion.article
                  key={service.id}
                  variants={revealItem}
                  className="panel rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2"
                >
                  <div className="accent-soft mb-6 inline-flex rounded-2xl p-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                    {service.shortDescription}
                  </p>
                  <Link
                    to="/services"
                    className="accent-link mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    Explore service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.article>
              )
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-shell">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center">
          <motion.div variants={revealItem} className="mb-10 max-w-2xl">
            <p className="accent-text text-xs uppercase tracking-[0.35em]">Stats</p>
            <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Numbers shaped by delivery.
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-shell">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center">
          <motion.div variants={revealItem} className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="accent-text text-xs uppercase tracking-[0.35em]">Featured Work</p>
              <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Selected builds from the forge.
              </h2>
              <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">
                A quick scan of production-ready work across mobile, AI, and digital experience
                delivery.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="accent-link inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em]"
            >
              Open portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={revealItem}
            className="hide-scrollbar flex snap-x gap-5 overflow-x-auto pb-4"
          >
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="panel min-w-[19rem] snap-start overflow-hidden rounded-[2rem] sm:min-w-[24rem] lg:min-w-[26rem]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-64 w-full object-cover"
                />
                <div className="space-y-4 p-6">
                  <span className="accent-soft rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em]">
                    {project.categoryLabel}
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl font-bold">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </MotionSection>

      <MotionSection className="section-shell">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center">
          <motion.div
            variants={revealItem}
            className="panel grid rounded-[2.5rem] p-6 sm:p-8 lg:grid-cols-[1fr_1fr]"
          >
            <div className="border-b border-[color:var(--surface-border)] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
              <p className="accent-text text-xs uppercase tracking-[0.35em]">Contact</p>
              <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Build with a team that ships.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-[color:var(--muted)]">
                The Total Forge partners with ambitious teams that need reliable execution across
                product, automation, content, and digital experience delivery.
              </p>
            </div>

            <div className="grid gap-5 pt-8 lg:pl-8 lg:pt-0">
              <div className="surface-card rounded-[1.5rem] p-5">
                <p className="accent-text text-xs uppercase tracking-[0.3em]">Email</p>
                <a href="mailto:thetotalforge@gmail.com" className="mt-3 block font-heading text-2xl font-bold">
                  thetotalforge@gmail.com
                </a>
              </div>
              <div className="surface-card rounded-[1.5rem] p-5">
                <p className="accent-text text-xs uppercase tracking-[0.3em]">Phone</p>
                <a href="tel:+13074436649" className="mt-3 block font-heading text-2xl font-bold">
                  +1 307 443 6649
                </a>
              </div>
              <div className="surface-card rounded-[1.5rem] p-5">
                <p className="accent-text text-xs uppercase tracking-[0.3em]">Address</p>
                <p className="mt-3 text-lg text-[color:var(--text)]">30 N Gould St #64478, Sheridan, WY 82801, USA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </MotionSection>
    </motion.main>
  )
}

export default Home
