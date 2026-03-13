'use client';

import { useEffect, useRef } from 'react';
import styles from './ValuesSection.module.css';
import { valuesPage } from '@/content/homeContent';

export default function ValuesSection() {
  const sectionRef = useRef(null);

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
    <section id="values" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <div className={`${styles.headerCopy} ${styles.animateOnScroll}`}>
            <span className="text-overline">{valuesPage.eyebrow}</span>
            <h2>{valuesPage.title}</h2>
            <p>{valuesPage.intro}</p>
          </div>

          <div
            className={`${styles.summaryCard} ${styles.animateOnScroll}`}
            style={{ transitionDelay: '0.08s' }}
          >
            <span className={styles.summaryLabel}>Core Frame</span>
            <strong>Belief. Mission. Vision.</strong>
            <p>The page presents the official JCI values, mission, and vision.</p>
          </div>
        </div>

        <div className={styles.layout}>
          <article className={`${styles.creedCard} ${styles.animateOnScroll}`} style={{ transitionDelay: '0.12s' }}>
            <span className={styles.cardLabel}>JCI Beliefs</span>
            <div className={styles.beliefList}>
              {valuesPage.beliefs.map((belief, index) => (
                <div key={belief} className={styles.beliefItem}>
                  <span className={styles.beliefIndex}>{`${index + 1}`.padStart(2, '0')}</span>
                  <p>{belief}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className={styles.sideStack}>
            <article
              className={`${styles.sideCard} ${styles.animateOnScroll}`}
              style={{ transitionDelay: '0.16s' }}
            >
              <span className={styles.sideLabel}>Mission</span>
              <p>{valuesPage.mission}</p>
            </article>

            <article
              className={`${styles.sideCard} ${styles.sideCardDark} ${styles.animateOnScroll}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <span className={styles.sideLabel}>Vision</span>
              <p>{valuesPage.vision}</p>
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
}
