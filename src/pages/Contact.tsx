import { site, isConfigured } from '../data/site'

export default function Contact() {
  const links = [
    { label: 'LinkedIn', url: site.linkedin, note: 'Connect with me professionally.' },
    { label: 'GitHub', url: site.github, note: 'See my code and projects.' },
    { label: 'Email', url: site.email ? `mailto:${site.email}` : '', note: site.email },
    { label: 'Resume (PDF)', url: site.resumeUrl, note: 'Download my latest resume.' },
  ]

  return (
    <section className="container-page pt-14 md:pt-20">
      <p className="section-label">Contact</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
        Let's connect.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        I'm open to opportunities in Data Analytics, Business Intelligence, and
        Reporting. If my experience or projects sound like a good fit for your
        team, I'd love to hear from you.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {links.map((l) => (
          <div key={l.label} className="card p-6">
            <h2 className="text-lg font-bold">{l.label}</h2>
            <p className="mt-1 text-sm text-muted">{l.note || 'Link coming soon.'}</p>
            {isConfigured(l.url) ? (
              <a
                href={l.url}
                target={l.url.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="mt-4 inline-block font-semibold text-accent hover:text-accentDeep"
              >
                Open ↗
              </a>
            ) : (
              <span className="mt-4 inline-block rounded-full bg-ink/[0.06] px-4 py-1.5 text-sm font-medium text-muted">
                Coming soon
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
