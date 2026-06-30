import { Link } from 'react-router-dom'
import Logo from '@/components/Logo'

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9.75h4v11.25H3Zm6.5 0h3.83v1.54h.06c.53-1 1.83-2.04 3.77-2.04 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V21h-4Z" />
    </svg>
  )
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.08 3.29 9.39 7.85 10.9.58.1.79-.25.79-.56 0-.27-.01-1.18-.02-2.15-3.19.69-3.86-1.35-3.86-1.35-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.35.97.11-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.19 1.18a10.98 10.98 0 0 1 5.81 0c2.22-1.49 3.19-1.18 3.19-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.42-2.69 5.39-5.25 5.67.41.36.77 1.07.77 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  )
}

function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.4.58A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.58 9.4.58 9.4.58s7.55 0 9.4-.58a3 3 0 0 0 2.1-2.12A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.75 15.72V8.28L16.25 12Z" />
    </svg>
  )
}

const socials = [
  { label: 'LinkedIn', href: '#', icon: LinkedInIcon },
  { label: 'GitHub', href: '#', icon: GitHubIcon },
  { label: 'YouTube', href: '#', icon: YouTubeIcon },
]

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
]

function Footer() {
  return (
    <footer className="border-t border-[color:var(--surface-border)] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="space-y-5">
          <Logo />
          <p className="max-w-xl text-sm leading-7 text-[color:var(--muted)]">
            The Total Forge crafts mobile apps, AI automation, cinematic video, and modern web
            platforms with a production-focused mindset.
          </p>
        </div>

        <div className="space-y-4">
          <p className="accent-text text-xs uppercase tracking-[0.35em]">Contact</p>
          <div className="space-y-2 text-sm text-[color:var(--muted)]">
            <a href="mailto:thetotalforge@gmail.com" className="block transition hover:text-[color:var(--text)]">
              thetotalforge@gmail.com
            </a>
            <a href="tel:+13074436649" className="block transition hover:text-[color:var(--text)]">
              +1 307 443 6649
            </a>
            <p>30 N Gould St #64478, Sheridan, WY 82801, USA</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="accent-text text-xs uppercase tracking-[0.35em]">Navigate</p>
          <div className="flex flex-wrap gap-3">
            {quickLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full border border-[color:var(--surface-border)] px-4 py-2 text-sm text-[color:var(--muted)] transition duration-300 hover:bg-[color:var(--surface)] hover:text-[color:var(--text)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="surface-hover rounded-full border border-[color:var(--surface-border)] p-3 text-[color:var(--muted)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent-soft-border)] hover:text-[color:var(--accent-soft-text)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-[color:var(--surface-border)] pt-6 text-sm text-[color:var(--muted)]">
        <p>&copy; {new Date().getFullYear()} The Total Forge. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
