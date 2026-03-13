'use client';

import { useEffect, useRef } from 'react';
import styles from './Programs.module.css';
import { projects } from '@/content/homeContent';

export default function Programs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animateOnScroll}`);
    elements?.forEach((el) => observer.observe(el));

    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="programs" className={styles.programs} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <span className={`text-overline ${styles.animateOnScroll}`}>Impact Portfolio</span>
          <h2 className={styles.animateOnScroll}>Projects featured in the issue.</h2>
          <p className={`${styles.intro} ${styles.animateOnScroll}`}>
            These project pages cover education, community relations, public health, national
            hosting, compassion, literacy, and culture in the chapter&apos;s 2025 work.
          </p>
        </div>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`${styles.project} ${index % 2 === 1 ? styles.reverse : ''} ${
                styles.animateOnScroll
              }`}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className={styles.media}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className={styles.placeholder}>
                    <span>{project.category}</span>
                    <strong>{project.placeholderLabel || 'Featured in the issue'}</strong>
                  </div>
                )}
              </div>

              <div className={styles.body}>
                <span className={styles.meta}>{project.category}</span>
                <h3>{project.title}</h3>
                <p className={styles.summary}>{project.summary}</p>

                <div className={styles.detailStack}>
                  {project.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <ul className={styles.highlights}>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className={`${styles.footerNote} ${styles.animateOnScroll}`}>
          <p>Follow the chapter on Facebook for updates beyond the projects featured in the issue.</p>
          <a
            href="https://www.facebook.com/JCIBoholanaKisses"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Follow the chapter
          </a>
        </div>
      </div>
    </section>
  );
}
