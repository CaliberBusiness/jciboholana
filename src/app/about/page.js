import About from '@/components/About';
import Footer from '@/components/Footer';
import JciSection from '@/components/JciSection';
import PageHero from '@/components/PageHero';
import SiteHeader from '@/components/SiteHeader';
import Story from '@/components/Story';
import StructuredData from '@/components/StructuredData';
import ValuesSection from '@/components/ValuesSection';
import { pastPresidents, valuesPage } from '@/content/homeContent';
import { createMetadata, createPageStructuredData } from '@/lib/site';

const title = 'About JCI Boholana Kisses | Chapter Story, Mission, and History';
const description =
  'Learn about JCI Boholana Kisses in Tagbilaran City, Bohol, including the chapter story, JCI mission and values, and the leaders who shaped its history.';
const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
];

export const metadata = createMetadata({
  title,
  description,
  path: '/about',
  keywords: [
    'about JCI Boholana Kisses',
    'JCI chapter history Bohol',
    'JCI values and mission',
    'women leadership organization Tagbilaran',
  ],
});

const structuredData = createPageStructuredData({
  path: '/about',
  title,
  description,
  type: 'AboutPage',
  breadcrumbs,
});

export default function AboutPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="About the Chapter"
          title="The chapter story, values, and legacy behind JCI Boholana Kisses."
          description={description}
          breadcrumbs={breadcrumbs}
          stats={[
            { value: '17+', label: 'years of chapter service' },
            { value: `${pastPresidents.length}`, label: 'past presidents honored' },
            { value: 'JCI', label: 'values, mission, and vision' },
          ]}
          actions={[
            { href: '/leadership', label: 'Meet the 2026 leaders' },
            { href: '/projects', label: 'View featured projects', variant: 'outline' },
          ]}
        />
        <About />
        <ValuesSection />
        <JciSection />
        <Story />
      </main>
      <Footer />
    </>
  );
}
