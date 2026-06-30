import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageSeo from '@/components/PageSeo'

function NotFound() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="section-shell flex items-center"
    >
      <PageSeo
        title="404"
        description="The page you requested could not be found on The Total Forge website."
        image="https://picsum.photos/seed/totalforge-404/1200/630"
      />

      <div className="panel mx-auto w-full max-w-3xl rounded-[2.5rem] p-8 text-center sm:p-12">
        <p className="accent-text text-xs uppercase tracking-[0.35em]">404</p>
        <h1 className="mt-4 font-heading text-5xl font-bold tracking-[-0.05em] sm:text-6xl">
          This route is still in the forge.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[color:var(--muted)]">
          The page does not exist or has moved. Use the link below to return to the home page.
        </p>
        <Link
          to="/"
          className="accent-solid mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1"
        >
          <ArrowLeft className="h-4 w-4" />
          Back Home
        </Link>
      </div>
    </motion.main>
  )
}

export default NotFound
