import { Link } from 'react-router-dom'
import { site, isConfigured } from '../data/site'
import { coreSkills, additionalTools } from '../data/skills'

export default function About() {
  return (
    <section className="container-page pt-14 md:pt-20">
      <p className="section-label">About</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
        A little about me
      </h1>

      <div className="mt-8 grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 leading-relaxed text-ink/85">
          <p>
            I have a background in Economics and experience in Data Analytics
            and Business Intelligence. What I enjoy most is figuring out why
            something doesn't add up, finding the root cause, and building
            solutions that make information easier to understand and use.
          </p>
          <p>
            Throughout my career, I've worked on business intelligence
            dashboards, workforce reporting, financial analysis, anomaly
            detection, and process improvement. I enjoy combining technical
            problem-solving with an understanding of how businesses actually
            operate.
          </p>
          <p>
            I hold a Bachelor's degree in Economics and a Graduate Diploma in
            Business Insights &amp; Analytics from Humber College in Toronto.
          </p>
          <p>
            I'm particularly interested in opportunities where I can turn
            complex information into useful insights, improve reporting
            processes, and create solutions that people can rely on.
          </p>

          <h2 className="pt-4 text-2xl font-bold tracking-tight">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">Business Analyst — Impact Kitchen, Toronto</h3>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-ink/80">
                <li>Designed and built interactive BI dashboards for financial and operational reporting.</li>
                <li>Developed 15+ customized workforce reports and dashboards with IBM Cognos Analytics.</li>
                <li>Worked with SQL-based queries, financial data validation, and reporting logic.</li>
                <li>Investigated complex discrepancies across finance, payroll, and operations.</li>
                <li>Developed AI-assisted reporting workflows and process improvements.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Data Analyst — SCAP Analysis, Colombia</h3>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-ink/80">
                <li>Worked with SQL, R, Excel, Microsoft Azure, and KQL.</li>
                <li>Performed customer data cleaning and transformation.</li>
                <li>Analyzed retail sales, product assortment, and sales mix variance.</li>
                <li>Investigated system logs and anomalies associated with application downtime.</li>
                <li>Participated in developing an anomaly detection solution.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Data Analyst — Kinesso, Colombia</h3>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-ink/80">
                <li>Supported Marketing Mix Modeling projects.</li>
                <li>Worked with data preparation, statistical analysis, forecasting, and marketing performance analysis.</li>
                <li>Used analytical tools including R and Python.</li>
              </ul>
            </div>
          </div>

          <h2 className="pt-4 text-2xl font-bold tracking-tight">Education</h2>
          <ul className="space-y-3">
            <li>
              <p className="font-bold">Humber College — Toronto, Canada</p>
              <p className="text-muted">Graduate Diploma in Business Insights &amp; Analytics</p>
            </li>
            <li>
              <p className="font-bold">Universidad Sergio Arboleda — Bogotá, Colombia</p>
              <p className="text-muted">Bachelor's Degree in Economics</p>
            </li>
          </ul>
        </div>

        <aside className="space-y-8">
          <div className="card p-6">
            <h3 className="font-bold">Core skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {coreSkills.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h3 className="font-bold">Also experienced with</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {additionalTools.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h3 className="font-bold">Resume</h3>
            <p className="mt-2 text-sm text-muted">
              {isConfigured(site.resumeUrl)
                ? 'Download my latest resume as a PDF.'
                : 'Resume PDF coming soon — add the file and link in site.ts.'}
            </p>
            {isConfigured(site.resumeUrl) ? (
              <a href={site.resumeUrl} download className="btn-secondary mt-4 !px-5 !py-2">
                Download Resume ↓
              </a>
            ) : (
              <span className="mt-4 inline-block rounded-full bg-ink/[0.06] px-5 py-2 text-sm font-medium text-muted">
                Resume coming soon
              </span>
            )}
          </div>
        </aside>
      </div>

      <div className="mt-12">
        <Link to="/contact" className="btn-primary">Let's Connect</Link>
      </div>
    </section>
  )
}
