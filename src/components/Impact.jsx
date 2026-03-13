'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Impact.module.css';
import { impactStats } from '@/content/homeContent';

function AnimatedCounter({ target, suffix, isVisible, className = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  const display = target >= 1000 ? `${(count / 1000).toFixed(1)}K` : count;

  return (
    <span className={`${styles.statNumber} ${className}`}>
      {display}
      {suffix}
    </span>
  );
}

export default function Impact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [featuredStat, ...secondaryStats] = impactStats;

  useEffect(() => {
    const element = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="impact-stats"
      className={`${styles.impact} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.headerRow}>
          <div className={styles.headerCopy}>
            <span className={styles.badge}>Impact Snapshot</span>
            <h2 className={styles.title}>
              The numbers behind this <span className={styles.highlight}>issue.</span>
            </h2>
            <p className={styles.subtitle}>
              These markers are drawn from the issue&apos;s service counts, chapter age, board roster,
              and featured project set.
            </p>
          </div>

          <aside className={styles.summaryCard}>
            <span className={styles.summaryLabel}>At a Glance</span>
            <strong className={styles.summaryValue}>{impactStats.length} chapter markers</strong>
            <p className={styles.summaryText}>
              Service reach, chapter longevity, board scale, and project coverage in one view.
            </p>
          </aside>
        </div>

        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.featureCard}`}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTag}>Leading Metric</span>
              <span className={styles.cardIndex}>01</span>
            </div>

            <AnimatedCounter
              target={featuredStat.value}
              suffix={featuredStat.suffix}
              isVisible={isVisible}
              className={styles.featureNumber}
            />

            <div className={styles.featureBody}>
              <span className={styles.featureLabel}>{featuredStat.label}</span>
              <p className={styles.featureText}>
                A count drawn from the project pages featured in the issue.
              </p>
            </div>
          </article>

          <div className={styles.secondaryGrid}>
            {secondaryStats.map((stat, index) => (
              <article key={stat.label} className={`${styles.card} ${styles.metricCard}`}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardTag}>Snapshot</span>
                  <span className={styles.cardIndex}>{`${index + 2}`.padStart(2, '0')}</span>
                </div>

                <span className={styles.statLabel}>{stat.label}</span>

                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                  className={styles.metricNumber}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
