'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add(styles.visible);
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animateOnScroll}`);
    elements?.forEach((el) => observer.observe(el));

    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className={styles.cta} ref={sectionRef}>
      <div className={styles.background}>
        <div className={styles.pattern} />
      </div>
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.copy}>
            <span className={`${styles.eyebrow} ${styles.animateOnScroll}`}>Join the Chapter</span>
            <h2 className={`${styles.title} ${styles.animateOnScroll}`}>
              Be Part of the <span className={styles.highlight}>Movement.</span>
            </h2>
            <p className={`${styles.subtitle} ${styles.animateOnScroll}`}>
              Join a community of empowered leaders creating real, lasting change. Whether you want
              to lead, serve, or partner, there is a place for you here.
            </p>
            <div className={`${styles.tagRow} ${styles.animateOnScroll}`}>
              <span>Lead</span>
              <span>Serve</span>
              <span>Collaborate</span>
            </div>
          </div>

          <div className={`${styles.actionPanel} ${styles.animateOnScroll}`}>
            <span className={styles.actionLabel}>Choose your path</span>
            <div className={styles.actions}>
              <a
                href="https://www.facebook.com/JCIBoholanaKisses"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${styles.btnMember}`}
              >
                Become a Member
              </a>
              <Link href="/#contact" className={`btn ${styles.btnPartner}`}>
                Partner With Us
              </Link>
            </div>
            <p className={styles.actionNote}>
              Membership and partnership conversations start here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
