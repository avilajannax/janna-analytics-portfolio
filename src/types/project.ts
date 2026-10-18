/**
 * Project content model.
 *
 * Every project lives in its own file under `src/content/projects/`
 * and is registered in `src/content/projects/index.ts`.
 * All content sections are optional — only fill the ones that apply.
 */

export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  /** URL-friendly identifier, e.g. "sales-performance-bi" */
  slug: string
  /** `false` = hidden from the site. Flip to `true` when ready to publish. */
  published: boolean
  title: string
  /** One-line summary shown on cards and the detail page. */
  summary: string
  category: string
  tools: string[]
  /** Optional thumbnail, e.g. "/images/projects/sales-bi.png" */
  thumbnail?: string

  // Optional case-study sections (numbered 01–08 on the page)
  problem?: string
  data?: string
  approach?: string
  /** Raw HTML allowed for rich content (screenshots, embeds, lists). */
  dashboardHtml?: string
  findings?: string[]
  recommendations?: string[]
  learnings?: string

  /** e.g. GitHub repo, live dashboard, report PDF */
  links?: ProjectLink[]
}
