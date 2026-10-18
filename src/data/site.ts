/**
 * Personal information and links — edit in one place.
 * Leave a URL empty ("") to hide that link until it is ready.
 */
export const site = {
  name: 'Janna Avila',
  location: 'Toronto, Ontario, Canada',
  headline: 'Data Analyst | Business Intelligence & Reporting | Process Automation & Optimization',
  email: 'avilajannax@gmail.com',
  github: '',
  linkedin: '',
  /** Path to the resume PDF inside /public, e.g. "/documents/resume.pdf" */
  resumeUrl: '',
}

export const isConfigured = (url: string | undefined): boolean =>
  !!url && url.trim().length > 0
