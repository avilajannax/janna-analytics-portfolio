# Janna Avila — Data Analytics Portfolio

A personal portfolio website for Janna Avila, Data Analyst & Business Intelligence
professional based in Toronto, Canada. Built with **React + Vite + TypeScript +
Tailwind CSS + React Router**.

The site works beautifully with **zero published projects** and expands
automatically as projects are completed — no homepage or navigation edits needed.

---

## Run it locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev        # local dev server, usually http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Connect it to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio skeleton"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/janna-analytics-portfolio.git
git push -u origin main
```

## Deploy it on Vercel (free)

1. Sign in at [vercel.com](https://vercel.com) with your GitHub account.
2. **Add New → Project** → import this repository.
3. Vercel detects Vite automatically. Framework preset: **Vite**.
4. Build command: `npm run build` · Output directory: `dist`.
5. Deploy. The included `vercel.json` already routes all paths to
   `index.html` so React Router works on refresh.

**Custom domain:** free on Vercel's Hobby plan — Project → Settings →
Domains → add your domain, then point your DNS to Vercel's nameservers
(or add the A/CNAME records Vercel shows). SSL is automatic.

## Project publishing system

Projects are **data-driven**. Each project is a TypeScript file in
`src/content/projects/`, e.g. `my-project.ts`:

```ts
import type { Project } from '../../types/project'

const project: Project = {
  slug: 'my-project',          // URL: /projects/my-project
  published: false,            // false = hidden. Flip to true to publish.
  title: 'My Project Title',
  summary: 'One-line summary for the card.',
  category: 'Data Analytics',  // Business Intelligence | Data Analytics |
                               // Predictive Analytics | Data Quality |
                               // Process Optimization | Statistical Analysis
  tools: ['SQL', 'Python', 'Power BI'],
  thumbnail: '/images/projects/my-project.png',  // optional

  // Optional case-study sections — only the ones you fill appear.
  problem: '...',
  data: '...',
  approach: '...',
  dashboardHtml: '<p>Rich HTML: screenshots, <iframe> embeds…</p>',
  findings: ['Finding one', 'Finding two'],
  recommendations: ['Recommendation one'],
  learnings: '...',

  links: [
    { label: 'View Code on GitHub', url: 'https://github.com/...' },
    { label: 'Explore Dashboard', url: 'https://...' },
    { label: 'Download Report', url: '/documents/my-project-report.pdf' },
  ],
}

export default project
```

Then register it in `src/content/projects/index.ts`:

```ts
import myProject from './my-project'

const allProjects: Project[] = [
  salesPerformanceBi,
  workforceAnalytics,
  systemAnomalyDetection,
  myProject,   // <-- add here
]
```

That's it. The gallery, the featured section on the home page, and the
detail page (`/projects/my-project`) are generated automatically. The
detail page renders numbered sections 01–08; **sections you leave empty
don't render**.

To **unpublish** a project later, set `published: false` again.

> Choice rationale: plain TypeScript files instead of Markdown/MDX because
> the content is structured (typed fields, lists, links, optional rich HTML),
> it's type-checked at build time, needs no extra parser dependency, and
> co-locates naturally with the React components that render it.

### Why `published: false` matters

The three planning placeholders (`sales-performance-bi`,
`workforce-analytics`, `system-anomaly-detection`) ship unpublished on
purpose. Nothing appears on the site until a project is marked published,
so no unfinished or fabricated work is ever shown. With no published
projects, the Projects page and the home page show a polished empty state.

## Images and dashboards

- **Thumbnails / screenshots:** drop files in `public/images/projects/`,
  then reference them as `/images/projects/<file>` in the `thumbnail` field
  or inside `dashboardHtml` as `<img src="/images/projects/x.png">`.
- **PDF reports:** drop files in `public/documents/`, link as
  `/documents/<file>.pdf`.
- **Power BI / Streamlit / interactive dashboards:** paste the embed
  `<iframe>` (or an external link) into `dashboardHtml`, or add an entry
  under `links`. Responsive containers and safe iframe styling are built in.
- **Notebooks / code:** add GitHub links under `links`.

## Edit personal information

All personal details live in one file: **`src/data/site.ts`**

- `name`, `location`, `headline`, `email`
- `github`, `linkedin` — leave as `""` to hide the link (the site shows a
  graceful "coming soon" note instead of a dead link)
- `resumeUrl` — e.g. `"/documents/resume.pdf"` once the PDF is in
  `public/documents/`; empty string hides the download button

Skills live in **`src/data/skills.ts`** (`coreSkills`, `additionalTools`).
About-page copy is in **`src/pages/About.tsx`** — plain JSX, easy to edit.

## Project structure

```text
janna-analytics-portfolio/
├── public/
│   ├── images/            # thumbnails, screenshots, project assets
│   └── documents/         # resume PDF, report PDFs
├── src/
│   ├── components/        # Navbar, Footer, ProjectCard, EmptyState
│   ├── pages/             # Home, Projects, ProjectDetail, About, Contact, NotFound
│   ├── layouts/           # shared Layout (nav + footer)
│   ├── content/
│   │   └── projects/      # one TS file per project + index.ts registry
│   ├── data/              # site.ts (personal info/links), skills.ts
│   ├── types/             # Project type
│   └── index.css          # Tailwind + design tokens
├── index.html
├── tailwind.config.js     # palette: paper / ink / cobalt accent
├── vercel.json            # SPA routing for Vercel
└── README.md
```

## Design notes

- Warm off-white background (`paper`), dark charcoal type (`ink`), one
  confident cobalt accent (`accent`) — restrained, editorial, corporate-ready.
- System sans-serif stack for crisp type without web-font dependencies.
- Subtle hover states and transitions only; no heavy animation.
- Semantic HTML, alt text on images, focus-visible states, page-level
  titles and meta descriptions for SEO.
