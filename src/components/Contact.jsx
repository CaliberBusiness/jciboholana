'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Contact.module.css';

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Contact() {
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
    <section id="contact" className={`section ${styles.contact}`} ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <span className={`text-overline ${styles.animateOnScroll}`}>Get in Touch</span>
            <h2 className={styles.animateOnScroll}>Continue the conversation.</h2>
            <p className={`${styles.intro} ${styles.animateOnScroll}`}>
              Ready to collaborate, join, or ask about a project in the issue? Send a note and the
              chapter can continue the conversation beyond the magazine.
            </p>

            <div className={styles.contactItems}>
              <a
                href="mailto:jciboholanakisses2010@gmail.com"
                className={`${styles.contactItem} ${styles.animateOnScroll}`}
              >
                <div className={styles.contactIcon}>
                  <MailIcon />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>jciboholanakisses2010@gmail.com</p>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=17-E+Carlos+P+Garcia+Avenue+Tagbilaran+City+Bohol"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactItem} ${styles.animateOnScroll}`}
              >
                <div className={styles.contactIcon}>
                  <PinIcon />
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>17-E Carlos P. Garcia Avenue, Tagbilaran City</p>
                </div>
              </a>

              <a
                href="https://www.facebook.com/JCIBoholanaKisses"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactItem} ${styles.animateOnScroll}`}
              >
                <div className={styles.contactIcon}>
                  <FacebookIcon />
                </div>
                <div>
                  <h4>Follow Us</h4>
                  <p>facebook.com/JCIBoholanaKisses</p>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.contactPanel}>
            <span className={`text-overline ${styles.animateOnScroll}`}>How to Reach Us</span>
            <h3 className={styles.animateOnScroll}>Choose the best way to connect.</h3>
            <p className={`${styles.panelIntro} ${styles.animateOnScroll}`}>
              The chapter currently handles inquiries directly through email, Facebook, and in-person
              coordination. Use the channel that best matches your purpose.
            </p>

            <div className={styles.panelItems}>
              <div className={`${styles.panelCard} ${styles.animateOnScroll}`}>
                <span className={styles.panelCardTitle}>Membership and General Questions</span>
                <p>Use email for introductions, project questions, and formal chapter inquiries.</p>
                <a href="mailto:jciboholanakisses2010@gmail.com" className={styles.panelLink}>
                  Email the chapter
                </a>
              </div>

              <div className={`${styles.panelCard} ${styles.animateOnScroll}`}>
                <span className={styles.panelCardTitle}>Updates and Announcements</span>
                <p>Follow or message the chapter through Facebook for events and recent activity.</p>
                <a
                  href="https://www.facebook.com/JCIBoholanaKisses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.panelLink}
                >
                  Visit Facebook
                </a>
              </div>

              <div className={`${styles.panelCard} ${styles.animateOnScroll}`}>
                <span className={styles.panelCardTitle}>Partnerships and Community Work</span>
                <p>Review the chapter network first, then reach out to coordinate next steps.</p>
                <Link href="/network" className={styles.panelLink}>
                  View chapter network
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
