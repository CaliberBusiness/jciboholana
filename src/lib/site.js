import { withBasePath } from '@/lib/assetPath';

const [repositoryOwner = ''] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];

function stripTrailingSlash(value) {
  return value.replace(/\/+$/, '');
}

function ensureAbsoluteUrl(value) {
  if (!value) {
    return null;
  }

  const normalizedValue = stripTrailingSlash(value.trim());

  if (!normalizedValue) {
    return null;
  }

  if (/^https?:\/\//i.test(normalizedValue)) {
    return normalizedValue;
  }

  return `https://${normalizedValue}`;
}

const originCandidates = [
  process.env.NEXT_PUBLIC_SITE_URL,
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
  process.env.VERCEL_PROJECT_PRODUCTION_URL,
  process.env.NEXT_PUBLIC_VERCEL_URL,
  process.env.VERCEL_URL,
  repositoryOwner ? `https://${repositoryOwner}.github.io` : null,
  'http://localhost:3000',
];

export const siteName = 'JCI Boholana Kisses';
export const siteLanguage = 'en-PH';
export const siteLocale = 'en_PH';
export const siteTitle = `${siteName} | Leadership and Community Service in Bohol`;
export const siteDescription =
  'JCI Boholana Kisses is a Junior Chamber International chapter in Tagbilaran City, Bohol, Philippines, empowering women and young leaders through community projects, leadership training, advocacy, and partnerships.';
export const siteKeywords = [
  'JCI Boholana Kisses',
  'Junior Chamber International',
  'JCI Philippines',
  'Tagbilaran City',
  'Bohol',
  'leadership development',
  'community service',
  'women leaders',
  'youth empowerment',
  'nonprofit organization Philippines',
];

export const organizationEmail = 'jciboholanakisses2010@gmail.com';
export const organizationAddress = {
  streetAddress: '17-E Carlos P. Garcia Avenue',
  addressLocality: 'Tagbilaran City',
  addressRegion: 'Bohol',
  addressCountry: 'PH',
};
export const socialLinks = ['https://www.facebook.com/JCIBoholanaKisses', 'https://jci.cc'];
export const defaultOgImagePath = '/images/photos-grid.jpg?v=20260310';
export const defaultOgImageAlt =
  'JCI Boholana Kisses leadership and community impact highlights';

export const siteOrigin =
  originCandidates.map(ensureAbsoluteUrl).find(Boolean) ?? 'http://localhost:3000';
export const siteUrl = stripTrailingSlash(new URL(withBasePath('/'), `${siteOrigin}/`).toString());
export const organizationId = `${siteUrl}#organization`;
export const websiteId = `${siteUrl}#website`;

export function getAbsoluteUrl(path = '/') {
  return new URL(withBasePath(path), `${siteOrigin}/`).toString();
}

export function getHomeSectionHref(sectionId) {
  return withBasePath(`/${sectionId}`);
}

function mergeKeywords(keywords = []) {
  return [...new Set([...siteKeywords, ...keywords])];
}

export function createMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  imagePath = defaultOgImagePath,
  imageAlt = defaultOgImageAlt,
}) {
  const absoluteUrl = getAbsoluteUrl(path);
  const absoluteImage = getAbsoluteUrl(imagePath);

  return {
    title,
    description,
    keywords: mergeKeywords(keywords),
    alternates: {
      canonical: withBasePath(path),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName,
      locale: siteLocale,
      type: 'website',
      images: [
        {
          url: absoluteImage,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteImage],
    },
  };
}

export function createBreadcrumbStructuredData(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${getAbsoluteUrl(items.at(-1)?.href ?? '/')}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: getAbsoluteUrl(item.href),
    })),
  };
}

export function createWebPageStructuredData({
  path = '/',
  title,
  description,
  type = 'WebPage',
  imagePath = defaultOgImagePath,
}) {
  const url = getAbsoluteUrl(path);

  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: siteLanguage,
    isPartOf: {
      '@id': websiteId,
    },
    about: {
      '@id': organizationId,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: getAbsoluteUrl(imagePath),
      caption: defaultOgImageAlt,
    },
  };
}

export function createPageStructuredData({
  path = '/',
  title,
  description,
  type = 'WebPage',
  imagePath = defaultOgImagePath,
  breadcrumbs = [],
  mainEntity,
}) {
  const items = [
    getOrganizationStructuredData(),
    getWebsiteStructuredData(),
    createWebPageStructuredData({ path, title, description, type, imagePath }),
  ];

  if (breadcrumbs.length > 0) {
    items.push(createBreadcrumbStructuredData(breadcrumbs));
  }

  if (mainEntity) {
    items.push(mainEntity);
  }

  return items;
}

export function getOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': organizationId,
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    email: organizationEmail,
    image: getAbsoluteUrl(defaultOgImagePath),
    logo: getAbsoluteUrl('/images/logo.jpg'),
    sameAs: socialLinks,
    address: {
      '@type': 'PostalAddress',
      ...organizationAddress,
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Bohol',
      },
      {
        '@type': 'Country',
        name: 'Philippines',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'community inquiries',
      email: organizationEmail,
      areaServed: 'PH',
      availableLanguage: ['en', 'fil'],
    },
    knowsAbout: [
      'Leadership development',
      'Community service',
      'Women leadership',
      'Youth empowerment',
      'Public health',
      'Education initiatives',
      'Advocacy programs',
    ],
  };
}

export function getWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    url: siteUrl,
    name: siteName,
    description: siteDescription,
    inLanguage: siteLanguage,
    publisher: {
      '@id': organizationId,
    },
  };
}

export function getHomepageStructuredData() {
  return [
    getOrganizationStructuredData(),
    getWebsiteStructuredData(),
    createWebPageStructuredData({
      path: '/',
      title: siteTitle,
      description: siteDescription,
      type: 'CollectionPage',
      imagePath: defaultOgImagePath,
    }),
  ];
}
