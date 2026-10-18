import type { Project } from '../../types/project'
import salesPerformanceBi from './sales-performance-bi'
import workforceAnalytics from './workforce-analytics'
import systemAnomalyDetection from './system-anomaly-detection'

/**
 * All projects. Only `published: true` projects appear on the site.
 * To add a new project: create a file in this folder following the
 * existing shape, import it here, and add it to the array below.
 */
const allProjects: Project[] = [
  salesPerformanceBi,
  workforceAnalytics,
  systemAnomalyDetection,
]

export const projects: Project[] = allProjects.filter((p) => p.published)

export const getProject = (slug: string): Project | undefined =>
  allProjects.find((p) => p.slug === slug && p.published)
