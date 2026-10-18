import { Link } from 'react-router-dom'
import { site, isConfigured } from '../data/site'
import { coreSkills } from '../data/skills'
import { projects } from '../content/projects'
import ProjectCard from '../components/ProjectCard'
import EmptyState from '../components/EmptyState'

export default function Home() {
  const featured = projects.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="container-page pt-16 md:pt-24">
        <p className="text-lg text-ink/80">Hi, I'm Janna! 👋</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
          Turning complex data into{' '}
          <span className="text-accent">clear, practical solutions.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          I'm a Toronto-based data analytics professional who enjoys uncovering
          patterns, solving complex problems, and building tools that make data
          easier to understand and use.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/projects" className="btn-primary">Explore My Work</Link>
          <Link to="/contact" className="btn-secondary">Let's Connect</Link>
        </div>
        <div className="mt-8 flex gap-5 text-sm font-medium text-ink/60">
          {isConfigured(site.linkedin) && (
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn ↗</a>
          )}
          {isConfigured(site.github) && (
            <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-accent">GitHub ↗</a>
          )}
        </div>
      </section>

      {/* About preview */}
      <section className="container-page mt-24">
        <div className="card grid gap-8 p-8 md:grid-cols-[1fr_1.2fr] md:p-12">
          <div>
            <p className="section-label">A little about me</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              Economics background, analytics toolkit, business mindset.
            </h2>
          </div>
          <div className="text-muted">
            <p className="leading-relaxed">
              I have a background in Economics and experience in Data Analytics
              and Business Intelligence. What I enjoy most is figuring out why
              something doesn't add up, finding the root cause, and building
              solutions that make information easier to understand and use.
            </p>
            <Link to="/about" className="mt-4 inline-block font-semibold text-accent hover:text-accentDeep">
              Read more →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="container-page mt-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              Featured projects
            </h2>
          </div>
          {featured.length > 0 && (
            <Link to="/projects" className="font-semibold text-accent hover:text-accentDeep">
              View all →
            </Link>
          )}
        </div>
        <div className="mt-8">
          {featured.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {featured.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>

      {/* Skills */}
      <section className="container-page mt-24">
        <p className="section-label">Technical skills</p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
          The tools I work with
        </h2>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {coreSkills.map((s) => (
            <span key={s} className="chip !px-4 !py-2 !text-sm">{s}</span>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container-page mt-24">
        <div className="rounded-2xl bg-ink px-8 py-14 text-center text-paper md:py-16">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Let's connect.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-paper/70">
            I'm open to opportunities in Data Analytics, Business Intelligence,
            and Reporting. If my experience sounds like a good fit for your
            team, I'd love to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary !bg-paper !text-ink hover:!bg-accent hover:!text-paper">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
