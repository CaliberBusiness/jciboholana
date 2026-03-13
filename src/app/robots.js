import { getAbsoluteUrl, siteOrigin } from '@/lib/site';

export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: getAbsoluteUrl('/sitemap.xml'),
    host: siteOrigin,
  };
}
