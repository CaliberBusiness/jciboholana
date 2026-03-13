import { getAbsoluteUrl } from '@/lib/site';
import { getAllProjectSlugs } from '@/lib/projects';

export const dynamic = 'force-static';

export default function sitemap() {
  const pageEntries = [
    {
      url: getAbsoluteUrl('/'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: getAbsoluteUrl('/about'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: getAbsoluteUrl('/leadership'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: getAbsoluteUrl('/projects'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: getAbsoluteUrl('/network'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const projectEntries = getAllProjectSlugs().map((slug) => ({
    url: getAbsoluteUrl(`/projects/${slug}`),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [...pageEntries, ...projectEntries];
}
