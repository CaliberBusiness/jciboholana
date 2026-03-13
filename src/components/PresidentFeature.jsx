'use client';

import { useEffect, useRef } from 'react';
import styles from './PresidentFeature.module.css';
import { presidentFeature } from '@/content/homeContent';

export default function PresidentFeature() {
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
    <section id="president-message" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.layout}>
          <figure className={`${styles.photoCard} ${styles.animateOnScroll}`}>
            <img
              src={presidentFeature.image}
              alt={presidentFeature.byline}
              className={styles.photo}
              loading="lazy"
              decoding="async"
            />
            <figcaption className={styles.caption}>
              <span>{presidentFeature.eyebrow}</span>
              <strong>{presidentFeature.byline}</strong>
            </figcaption>
          </figure>

          <div className={styles.content}>
            <div className={`${styles.header} ${styles.animateOnScroll}`} style={{ transitionDelay: '0.06s' }}>
              <span className="text-overline">{presidentFeature.eyebrow}</span>
              <h2>{presidentFeature.title}</h2>
              <p className={styles.subtitle}>{presidentFeature.subtitle}</p>
              <p className={styles.byline}>{presidentFeature.byline}</p>
            </div>

            <div className={`${styles.pillarRow} ${styles.animateOnScroll}`} style={{ transitionDelay: '0.1s' }}>
              {presidentFeature.pillars.map((pillar) => (
                <span key={pillar} className={styles.pillar}>
                  {pillar}
                </span>
              ))}
            </div>

            <div className={styles.articleGrid}>
              <article
                className={`${styles.articleCard} ${styles.animateOnScroll}`}
                style={{ transitionDelay: '0.14s' }}
              >
                {presidentFeature.paragraphs.map((paragraph, index) => (
                  <p key={paragraph} className={index === 0 ? styles.openingParagraph : ''}>
                    {paragraph}
                  </p>
                ))}
              </article>

              <aside
                className={`${styles.quoteCard} ${styles.animateOnScroll}`}
                style={{ transitionDelay: '0.18s' }}
              >
                <span className={styles.quoteLabel}>Key Line</span>
                <p>{presidentFeature.pullQuote}</p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
