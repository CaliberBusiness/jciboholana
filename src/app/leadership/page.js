import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Leadership from '@/components/Leadership';
import PageHero from '@/components/PageHero';
import PresidentFeature from '@/components/PresidentFeature';
import SiteHeader from '@/components/SiteHeader';
import StructuredData from '@/components/StructuredData';
import Voices from '@/components/Voices';
import { boardMembers, leadershipContent, messages } from '@/content/homeContent';
import { createMetadata, createPageStructuredData } from '@/lib/site';

const title = 'JCI Boholana Kisses Leadership | 2026 Board and President';
const description =
  'Meet the 2026 JCI Boholana Kisses leadership team, including President Ma. Christine O. Torralba, the board of directors, and messages from the chapter network.';
const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/leadership', label: 'Leadership' },
];

export const metadata = createMetadata({
  title,
  description,
  path: '/leadership',
  keywords: [
    'JCI Boholana Kisses leadership',
    '2026 board of directors Boholana Kisses',
    'Ma. Christine O. Torralba',
    'JCI leaders in Bohol',
  ],
});

const structuredData = createPageStructuredData({
  path: '/leadership',
  title,
  description,
  type: 'CollectionPage',
  breadcrumbs,
});

export default function LeadershipPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="Leadership"
          title="The 2026 president, board of directors, and chapter voices."
          description={description}
          breadcrumbs={breadcrumbs}
          stats={[
            { value: `${boardMembers.length + 1}`, label: 'leaders in the 2026 board roster' },
            { value: '2026', label: leadershipContent.president.role },
            { value: `${messages.length}`, label: 'messages gathered in the issue' },
          ]}
          actions={[
            { href: '/projects', label: 'Read project stories' },
            { href: '/#contact', label: 'Connect with the chapter', variant: 'outline' },
          ]}
        />
        <PresidentFeature />
        <Leadership />
        <Voices />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
