'use client';

import styles from './Partners.module.css';
import {
  networkContent,
  networkHighlights,
  partnerChapters,
} from '@/content/homeContent';

export default function Partners() {
  const networkCount = partnerChapters.length;
  const fatherChapter = partnerChapters[0];
  const sisterCount = Math.max(networkCount - 1, 0);

  return (
    <section id="partners" className={styles.partners}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.header}>
            <span className="text-overline">{networkContent.eyebrow}</span>
            <h2>{networkContent.title}</h2>
            <p className={styles.subtitle}>{networkContent.intro}</p>
          </div>

          <aside className={styles.summaryCard}>
            <span className={styles.summaryLabel}>Network Scope</span>
            <strong className={styles.summaryValue}>{networkCount} chapter relationships</strong>

            <div className={styles.summaryMeta}>
              <div className={styles.summaryMetric}>
                <span>Father chapter</span>
                <strong>{fatherChapter}</strong>
              </div>

              <div className={styles.summaryMetric}>
                <span>Sister and peer ties</span>
                <strong>{sisterCount}</strong>
              </div>
            </div>
          </aside>
        </div>

        <div className={styles.bodyGrid}>
          <div className={styles.highlightRail}>
            {networkHighlights.map((item, index) => (
              <article key={item.title} className={styles.highlightCard}>
                <div className={styles.highlightTop}>
                  <span className={styles.highlightIndex}>{`${index + 1}`.padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.networkPanel}>
            <div className={styles.networkHeader}>
              <span className={styles.networkLabel}>Chapter Network</span>
              <h3>Chapter names that appear in the message pages.</h3>
              <p>
                This list follows the actual organizations represented in the issue&apos;s father
                chapter and sister chapter messages.
              </p>
            </div>

            <div className={styles.chapterGrid}>
              {partnerChapters.map((chapter, index) => (
                <div key={chapter} className={styles.chapterItem}>
                  <span className={styles.chapterIndex}>{`${index + 1}`.padStart(2, '0')}</span>
                  <span className={styles.chapterName}>{chapter}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
