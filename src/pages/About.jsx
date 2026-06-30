import { motion } from 'framer-motion'
import MotionSection from '@/components/MotionSection'
import { revealItem } from '@/components/motion'
import PageSeo from '@/components/PageSeo'

const values = [
  {
    title: 'Precision',
    description: 'Every detail is measured, refined, and built with clear intent from strategy through delivery.',
  },
  {
    title: 'Innovation',
    description: 'We combine strong technical thinking with creative experimentation to unlock practical advantage.',
  },
  {
    title: 'Transparency',
    description: 'Clear communication, visible progress, and honest trade-offs are part of every engagement.',
  },
  {
    title: 'Excellence',
    description: 'We hold the line on quality so the final product feels robust, polished, and ready to scale.',
  },
]

function About() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <PageSeo
        title="About"
        description="Learn the philosophy, vision, and values behind The Total Forge and its precision-focused approach to digital delivery."
        image="https://picsum.photos/seed/totalforge-about/1200/630"
      />

      <MotionSection className="section-shell flex items-center">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <motion.div variants={revealItem} className="space-y-6">
            <p className="accent-text text-xs uppercase tracking-[0.35em]">Our Story</p>
            <h1 className="font-heading text-3xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Ideas become durable digital products when the process is intentional.
            </h1>
          </motion.div>

          <motion.div variants={revealItem} className="panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-base leading-8 text-[color:var(--muted)]">
              Founded with the philosophy that technology should be forged with precision and
              purpose, The Total Forge began as a collective of digital artisans dedicated to
              crafting robust, scalable, and innovative solutions. We believe digital
              transformation is carefully forged through deep technical expertise, creative design,
              and unwavering quality.
            </p>
          </motion.div>
        </div>
      </MotionSection>

      <MotionSection className="section-shell flex items-center">
        <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1fr_1fr]">
          <motion.article variants={revealItem} className="panel rounded-[2rem] p-6 sm:p-8">
            <p className="accent-text text-xs uppercase tracking-[0.35em]">Vision</p>
            <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              A global forge for digital ambition.
            </h2>
            <p className="mt-5 text-base leading-8 text-[color:var(--muted)]">
              To be the global forge where businesses shape their digital destiny, delivering total
              solutions that bridge complex tech and human-centric design.
            </p>
          </motion.article>

          <motion.article variants={revealItem} className="panel rounded-[2rem] p-6 sm:p-8">
            <p className="accent-text text-xs uppercase tracking-[0.35em]">Approach</p>
            <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Strong systems. Human-centered outcomes.
            </h2>
            <p className="mt-5 text-base leading-8 text-[color:var(--muted)]">
              Our name reflects the way we work: shaping raw ideas through disciplined execution
              until they become dependable digital tools that move businesses forward.
            </p>
          </motion.article>
        </div>
      </MotionSection>

      <MotionSection className="section-shell flex items-center">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div variants={revealItem} className="mb-10 max-w-2xl">
            <p className="accent-text text-xs uppercase tracking-[0.35em]">Core Values</p>
            <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Principles that shape every engagement.
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <motion.article key={value.title} variants={revealItem} className="panel rounded-[2rem] p-6">
                <p className="accent-text text-xs uppercase tracking-[0.35em]">{value.title}</p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-shell flex items-center">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div variants={revealItem} className="mb-10 max-w-2xl">
            <p className="accent-text text-xs uppercase tracking-[0.35em]">Meet the Forge</p>
            <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              A multidisciplinary team of product builders.
            </h2>
            <p className="mt-5 text-base leading-8 text-[color:var(--muted)]">
              Strategy, engineering, and design work in sync here. Every launch is guided by specialists who keep quality, clarity, and growth at the center of the work.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                name: 'Morgan Vale',
                role: 'Founder & Product Lead',
                focus: 'Transforms complex business goals into durable digital strategy and product direction.',
              },
              {
                name: 'Sasha Kim',
                role: 'Engineering Director',
                focus: 'Builds reliable systems, APIs, and automation that scale with real user demand.',
              },
              {
                name: 'Nina Shah',
                role: 'Design Systems Lead',
                focus: 'Shapes accessible interfaces, brand systems, and visual experiences with precision.',
              },
              {
                name: 'Jordan Reed',
                role: 'Delivery & Growth Partner',
                focus: 'Keeps launches on track while aligning product outcomes with measurable business value.',
              },
            ].map((member) => (
              <motion.article key={member.name} variants={revealItem} className="panel rounded-[2rem] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[color:var(--text)]">
                  {member.role}
                </p>
                <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em]">{member.name}</h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{member.focus}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </MotionSection>
    </motion.main>
  )
}

export default About
