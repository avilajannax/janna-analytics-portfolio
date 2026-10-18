import { Link } from 'react-router-dom'
import type { Project } from '../types/project'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="card group flex flex-col overflow-hidden"
      aria-label={`View case study: ${project.title}`}
    >
      <div className="flex h-44 items-center justify-center bg-gradient-to-br from-accent/10 via-paper to-ink/[0.04] p-6">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} preview`}
            className="h-full w-full rounded-lg object-cover"
            loading="lazy"
          />
        ) : (
          <span className="font-mono text-sm text-muted/70">{'{'} preview {'}'}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="section-label">{project.category}</p>
        <h3 className="text-xl font-bold tracking-tight transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        {project.summary && (
          <p className="flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
        )}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tools.slice(0, 4).map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}
