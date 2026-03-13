import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Partners from '@/components/Partners';
import SiteHeader from '@/components/SiteHeader';
import StructuredData from '@/components/StructuredData';
import styles from './page.module.css';
import { messages, partnerChapters } from '@/content/homeContent';
import { createMetadata, createPageStructuredData } from '@/lib/site';

const title = 'JCI Boholana Kisses Network | Partner Chapters and JCI Relationships';
const description =
  'See the father chapter, sister chapters, and wider JCI network represented in the JCI Boholana Kisses issue, with relationships spanning Bohol, Cebu, Davao, Makati, Mandaue, San Pablo, and Surigao.';
const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/network', label: 'Network' },
];

const categoryCounts = messages.reduce((accumulator, message) => {
  accumulator[message.category] = (accumulator[message.category] ?? 0) + 1;
  return accumulator;
}, {});

export const metadata = createMetadata({
  title,
  description,
  path: '/network',
  keywords: [
    'JCI Boholana Kisses network',
    'JCI sister chapters',
    'JCI Bohol Sandugo',
    'JCI Philippines chapter partnerships',
  ],
});

const structuredData = createPageStructuredData({
  path: '/network',
  title,
  description,
  type: 'CollectionPage',
  breadcrumbs,
});

export default function NetworkPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="Chapter Network"
          title="The chapter relationships, support system, and JCI links around Boholana Kisses."
          description={description}
          breadcrumbs={breadcrumbs}
          stats={[
            { value: `${partnerChapters.length}`, label: 'chapter relationships listed' },
            {
              value: `${Object.keys(categoryCounts).length}`,
              label: 'message categories represented',
            },
            { value: 'JCI PH', label: 'movement context and affiliations' },
          ]}
          actions={[
            { href: '/leadership', label: 'Read chapter voices' },
            { href: '/#contact', label: 'Start a partnership', variant: 'outline' },
          ]}
        />

        <section className={styles.section}>
          <div className="container">
            <div className={styles.grid}>
              <article className={styles.card}>
                <span className="text-overline">Relationship Snapshot</span>
                <h2>Why the network matters to chapter visibility and trust.</h2>
                <p>
                  JCI Boholana Kisses does not operate in isolation. The issue shows how the chapter
                  is supported by its father chapter, sister chapters, regional leaders, and the wider
                  JCI Philippines network. Those relationships strengthen credibility, collaboration,
                  and long-term program reach.
                </p>
                <ul className={styles.tagList}>
                  {partnerChapters.map((chapter) => (
                    <li key={chapter}>{chapter}</li>
                  ))}
                </ul>
              </article>

              <aside className={styles.card}>
                <span className="text-overline">Message Mix</span>
                <h2>How the issue distributes chapter support.</h2>
                <div className={styles.statGrid}>
                  {Object.entries(categoryCounts).map(([category, count]) => (
                    <div key={category} className={styles.statCard}>
                      <strong>{count}</strong>
                      <span>{category}</span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <Partners />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
