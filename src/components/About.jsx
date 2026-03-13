'use client';

import { useEffect, useRef } from 'react';
import styles from './About.module.css';
import { chapterIntro } from '@/content/homeContent';

export default function About() {
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
    elements?.forEach((el) => observer.observe(el));

    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="about" className={styles.aboutSection} ref={sectionRef}>
      <div className="container">
        <div className={styles.topGrid}>
          <div className={styles.copyColumn}>
            <span className={`text-overline ${styles.animateOnScroll}`}>{chapterIntro.eyebrow}</span>
            <h2 className={`${styles.title} ${styles.animateOnScroll}`}>{chapterIntro.title}</h2>

            <div className={styles.paragraphStack}>
              {chapterIntro.intro.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`${styles.bodyCopy} ${styles.animateOnScroll}`}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className={`${styles.pullQuote} ${styles.animateOnScroll}`}>
              <span className={styles.quoteMark}>&quot;</span>
              <p>{chapterIntro.pullQuote}</p>
            </blockquote>
          </div>

          <div className={styles.featureColumn}>
            <figure className={`${styles.imageCard} ${styles.animateOnScroll}`}>
              <img
                src={chapterIntro.featureImage}
                alt="Portrait of Ma. Christine O. Torralba for the JCI Boholana Kisses president's message"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className={`${styles.noteCard} ${styles.animateOnScroll}`}>
              <span className={styles.noteLabel}>{chapterIntro.presidentNoteTitle}</span>
              <p className={styles.noteLead}>{chapterIntro.presidentNote}</p>
              <p className={styles.noteExcerpt}>{chapterIntro.presidentExcerpt}</p>
              <a href="/leadership" className={`btn btn-primary ${styles.noteAction}`}>
                Read president message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
