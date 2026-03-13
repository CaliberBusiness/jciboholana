'use client';

import { useEffect, useRef } from 'react';
import styles from './JciSection.module.css';
import { jciOverview } from '@/content/homeContent';

export default function JciSection() {
  const sectionRef = useRef(null);
  const pillarDeck = jciOverview.pillars.join(' • ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.12 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animateOnScroll}`);
    elements?.forEach((element) => observer.observe(element));

    return () => elements?.forEach((element) => observer.unobserve(element));
  }, []);

  return (
    <section id="jci" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.sectionFrame}>
          <div className={styles.introGrid}>
            <div className={`${styles.header} ${styles.animateOnScroll}`} style={{ transitionDelay: '0.04s' }}>
              <span className="text-overline">{jciOverview.eyebrow}</span>
              <h2 className={styles.title}>{jciOverview.title}</h2>
              <p className={styles.deck}>{pillarDeck}</p>
            </div>

            <aside className={`${styles.pillarCard} ${styles.animateOnScroll}`} style={{ transitionDelay: '0.1s' }}>
              <span className={styles.pillarLabel}>Core Pillars</span>
              <div className={styles.pillarList}>
                {jciOverview.pillars.map((pillar, index) => (
                  <div key={pillar} className={styles.pillarItem}>
                    <span className={styles.pillarIndex}>{`0${index + 1}`}</span>
                    <span className={styles.pillarName}>{pillar}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <article className={`${styles.leadPanel} ${styles.animateOnScroll}`} style={{ transitionDelay: '0.14s' }}>
            <span className={styles.leadLabel}>Chapter Overview</span>
            <p className={styles.lead}>{jciOverview.lead}</p>
          </article>

          <div className={styles.editorialGrid}>
            <article className={`${styles.articleCard} ${styles.animateOnScroll}`} style={{ transitionDelay: '0.18s' }}>
              <span className={styles.articleLabel}>Who We Are</span>
              <div className={styles.paragraphStack}>
                {jciOverview.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={`${styles.body} ${index === 0 ? styles.openingParagraph : ''}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            <aside className={`${styles.visionCard} ${styles.animateOnScroll}`} style={{ transitionDelay: '0.22s' }}>
              <span className={styles.visionLabel}>{jciOverview.visionLabel}</span>
              <p className={styles.visionText}>{jciOverview.vision}</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
