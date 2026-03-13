import './globals.css';
import { withBasePath } from '@/lib/assetPath';
import {
  defaultOgImageAlt,
  getAbsoluteUrl,
  siteDescription,
  siteKeywords,
  siteLanguage,
  siteLocale,
  siteOrigin,
  siteTitle,
  siteUrl,
} from '@/lib/site';

const openGraphImage = getAbsoluteUrl('/images/photos-grid.jpg?v=20260310');
const iconVersion = '20260313-3';
const faviconPng = withBasePath(`/favicon.png?v=${iconVersion}`);
const faviconIco = withBasePath(`/favicon.ico?v=${iconVersion}`);
const appleTouchIcon = withBasePath(`/apple-touch-icon.png?v=${iconVersion}`);

export const metadata = {
  metadataBase: new URL(siteOrigin),
  title: siteTitle,
  description: siteDescription,
  keywords: siteKeywords,
  applicationName: 'JCI Boholana Kisses',
  alternates: {
    canonical: withBasePath('/'),
  },
  authors: [{ name: 'JCI Boholana Kisses' }],
  creator: 'JCI Boholana Kisses',
  publisher: 'JCI Boholana Kisses',
  category: 'community organization',
  manifest: withBasePath('/manifest.webmanifest'),
  formatDetection: {
    email: true,
    address: true,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: faviconPng, type: 'image/png' },
      { url: faviconIco, sizes: 'any' },
    ],
    shortcut: faviconIco,
    apple: appleTouchIcon,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: 'JCI Boholana Kisses',
    type: 'website',
    locale: siteLocale,
    url: siteUrl,
    images: [
      {
        url: openGraphImage,
        width: 2048,
        height: 2048,
        alt: defaultOgImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [openGraphImage],
  },
  referrer: 'origin-when-cross-origin',
};

export default function RootLayout({ children }) {
  return (
    <html lang={siteLanguage}>
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
