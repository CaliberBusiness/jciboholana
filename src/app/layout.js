import './globals.css';

const [repositoryOwner = '', repositoryName = ''] =
  process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.GITHUB_ACTIONS === 'true' && repositoryName ? `/${repositoryName}` : '');
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
  (repositoryOwner ? `https://${repositoryOwner}.github.io${basePath}` : 'http://localhost:3000');
const openGraphImage = `${siteUrl}/images/photos-grid.jpg?v=20260310`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'JCI Boholana Kisses | Developing Leaders for a Changing World',
  description:
    'JCI Boholana Kisses is an all women-LGBTQ++ chapter of Junior Chamber International Philippines, based in Tagbilaran City, Bohol. Empowering future leaders through community projects, leadership training, and advocacy.',
  keywords: [
    'JCI',
    'JCI Boholana Kisses',
    'Junior Chamber International',
    'Bohol',
    'Tagbilaran',
    'leadership',
    'women empowerment',
    'LGBTQ',
    'community organization',
    'Philippines',
  ],
  openGraph: {
    title: 'JCI Boholana Kisses | Developing Leaders for a Changing World',
    description:
      'An all women-LGBTQ++ chapter of JCI Philippines empowering future leaders in Bohol.',
    type: 'website',
    locale: 'en_PH',
    url: siteUrl,
    images: [
      {
        url: openGraphImage,
        width: 2048,
        height: 2048,
        alt: 'JCI Boholana Kisses photo grid',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JCI Boholana Kisses | Developing Leaders for a Changing World',
    description:
      'An all women-LGBTQ++ chapter of JCI Philippines empowering future leaders in Bohol.',
    images: [openGraphImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A192F" />
      </head>
      <body>{children}</body>
    </html>
  );
}
