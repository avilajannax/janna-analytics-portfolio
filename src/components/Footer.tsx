import { Link } from 'react-router-dom'
import { site, isConfigured } from '../data/site'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold tracking-tight">
            Janna<span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">{site.headline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink/70">
            <li><Link to="/projects" className="hover:text-accent">Projects</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            {isConfigured(site.linkedin) && (
              <li><a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a></li>
            )}
            {isConfigured(site.github) && (
              <li><a href={site.github} target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a></li>
            )}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line/60">
        <p className="container-page py-5 text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
