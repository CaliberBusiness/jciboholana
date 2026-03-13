import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Impact from '@/components/Impact';
import PageHero from '@/components/PageHero';
import Programs from '@/components/Programs';
import SiteHeader from '@/components/SiteHeader';
import StructuredData from '@/components/StructuredData';
import { impactStats } from '@/content/homeContent';
import { projectItems } from '@/lib/projects';
import { createMetadata, createPageStructuredData } from '@/lib/site';

const title = 'JCI Boholana Kisses Projects | Community Programs and Impact Stories';
const description =
  'Explore JCI Boholana Kisses projects in education, public health, literacy, culture, compassion, and community service across Bohol.';
const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
];

export const metadata = createMetadata({
  title,
  description,
  path: '/projects',
  keywords: [
    'JCI Boholana Kisses projects',
    'community programs in Bohol',
    'education outreach Bohol',
    'public health missions Bohol',
  ],
});

const structuredData = createPageStructuredData({
  path: '/projects',
  title,
  description,
  type: 'CollectionPage',
  breadcrumbs,
});

export default function ProjectsPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="Projects and Programs"
          title="Community projects and service stories from JCI Boholana Kisses."
          description={description}
          breadcrumbs={breadcrumbs}
          stats={[
            { value: `${projectItems.length}`, label: 'featured project stories' },
            { value: `${impactStats[0].value}+`, label: impactStats[0].label.toLowerCase() },
            { value: `${impactStats[1].value}`, label: 'years since charter' },
          ]}
          actions={[
            { href: '/#contact', label: 'Partner with the chapter' },
            { href: '/about', label: 'Read the chapter story', variant: 'outline' },
          ]}
        />
        <Impact />
        <Programs />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
