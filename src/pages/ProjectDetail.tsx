import { useParams, Link, Navigate } from 'react-router-dom'
import { getProject } from '../content/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const numbered = [
    { n: '01', title: 'The Problem', body: project.problem },
    { n: '02', title: 'The Data', body: project.data },
    { n: '03', title: 'Tools & Technologies', body: project.tools.join(', ') },
    { n: '04', title: 'My Approach', body: project.approach },
  ].filter((s) => s.body && s.body.length > 0)

  // Optional numbered sections — only the ones with content render
  return (
    <article className="container-page pt-14 md:pt-20">
      <Link to="/projects" className="font-semibold text-accent hover:text-accentDeep">
        ← All projects
      </Link>

      <p className="section-label mt-8">{project.category}</p>
      <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl">
        {project.title}
      </h1>
      {project.summary && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          {project.summary}
        </p>
      )}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tools.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      {project.thumbnail && (
        <img
          src={project.thumbnail}
          alt={`${project.title} dashboard preview`}
          className="mt-10 w-full rounded-2xl border border-line object-cover"
          loading="lazy"
        />
      )}

      {/* Optional numbered sections */}
      <div className="mt-14 space-y-12">
        {numbered.map((s) => (
          <section key={s.n} aria-label={s.title}>
            <div className="flex items-baseline gap-4 border-b border-line pb-3">
              <span className="font-mono text-sm text-accent">{s.n}</span>
              <h2 className="text-xl font-bold tracking-tight">{s.title}</h2>
            </div>
            <p className="mt-4 max-w-3xl whitespace-pre-line leading-relaxed text-ink/85">
              {s.body}
            </p>
          </section>
        ))}

        {project.dashboardHtml && (
          <section aria-label="Dashboard and analysis">
            <div className="flex items-baseline gap-4 border-b border-line pb-3">
              <span className="font-mono text-sm text-accent">05</span>
              <h2 className="text-xl font-bold tracking-tight">The Dashboard / Analysis</h2>
            </div>
            <div
              className="prose-dashboard mt-4 max-w-3xl"
              dangerouslySetInnerHTML={{ __html: project.dashboardHtml }}
            />
          </section>
        )}

        {project.findings && project.findings.length > 0 && (
          <section aria-label="Key findings">
            <div className="flex items-baseline gap-4 border-b border-line pb-3">
              <span className="font-mono text-sm text-accent">06</span>
              <h2 className="text-xl font-bold tracking-tight">Key Findings</h2>
            </div>
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 leading-relaxed text-ink/85">
              {project.findings.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </section>
        )}

        {project.recommendations && project.recommendations.length > 0 && (
          <section aria-label="Business recommendations">
            <div className="flex items-baseline gap-4 border-b border-line pb-3">
              <span className="font-mono text-sm text-accent">07</span>
              <h2 className="text-xl font-bold tracking-tight">Business Recommendations</h2>
            </div>
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-6 leading-relaxed text-ink/85">
              {project.recommendations.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </section>
        )}

        {project.learnings && (
          <section aria-label="What I learned">
            <div className="flex items-baseline gap-4 border-b border-line pb-3">
              <span className="font-mono text-sm text-accent">08</span>
              <h2 className="text-xl font-bold tracking-tight">What I Learned</h2>
            </div>
            <p className="mt-4 max-w-3xl whitespace-pre-line leading-relaxed text-ink/85">
              {project.learnings}
            </p>
          </section>
        )}
      </div>

      {/* Links */}
      {project.links && project.links.length > 0 && (
        <div className="mt-14 rounded-2xl border border-line bg-white/70 p-8">
          <h2 className="text-xl font-bold tracking-tight">Project Links</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
