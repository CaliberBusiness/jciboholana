import { projects } from '@/content/homeContent';

export const projectItems = projects.map((project) => ({
  ...project,
  href: `/projects/${project.slug}`,
}));

export function getAllProjectSlugs() {
  return projectItems.map((project) => project.slug);
}

export function getProjectBySlug(slug) {
  return projectItems.find((project) => project.slug === slug) ?? null;
}
