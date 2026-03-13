import { withBasePath } from '@/lib/assetPath';
import { siteDescription, siteLanguage, siteName } from '@/lib/site';

export const dynamic = 'force-static';

export default function manifest() {
  return {
    name: siteName,
    short_name: 'JCI Boholana',
    description: siteDescription,
    start_url: withBasePath('/'),
    scope: withBasePath('/'),
    display: 'standalone',
    background_color: '#0A192F',
    theme_color: '#0A192F',
    lang: siteLanguage,
    icons: [
      {
        src: withBasePath('/favicon.ico'),
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
