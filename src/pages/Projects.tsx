import { projects } from '../content/projects'
import ProjectCard from '../components/ProjectCard'
import EmptyState from '../components/EmptyState'

export default function Projects() {
  return (
    <section className="container-page pt-14 md:pt-20">
      <p className="section-label">Portfolio</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
        Selected Work
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        A collection of data analytics, business intelligence, and
        problem-solving projects. From raw data to actionable insights.
      </p>

      <div className="mt-12">
        {projects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  )
}
