'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Voices.module.css';
import { messages, printOnlyMessages } from '@/content/homeContent';

function getInitials(name) {
  return name
    .replace(/^(Atty\.|Pres\.|President)\s*/i, '')
    .replace(/^JCI\s+/i, '')
    .split(' ')
    .filter((word) => word.length > 1)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

function MessagePortrait({ message }) {
  const [hasError, setHasError] = useState(false);

  if (!message.image || hasError) {
    return <div className={styles.cardInitials}>{getInitials(message.author)}</div>;
  }

  return (
    <img
      src={message.image}
      alt={`${message.author}, ${message.role}`}
      className={styles.cardImage}
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
    />
  );
}

function MessageCard({ message, index }) {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <article
      ref={cardRef}
      className={`${styles.card} ${expanded ? styles.cardExpanded : ''} ${styles.animateOnScroll} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className={styles.cardTop}>
        <MessagePortrait message={message} />

        <div>
          <span className={styles.category}>{message.category}</span>
          <h3>{message.author}</h3>
          <p className={styles.meta}>
            {message.role} {message.chapter ? `| ${message.chapter}` : ''}
          </p>
        </div>
      </div>

      <p className={styles.excerpt}>{message.excerpt}</p>

      <div className={styles.details}>
        <button
          className={styles.toggleBtn}
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
        >
          {expanded ? 'Close note' : 'Read source note'}
        </button>
      </div>

      <div
        className={`${styles.detailsBody} ${expanded ? styles.detailsBodyOpen : ''}`}
        aria-hidden={!expanded}
      >
        {message.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export default function Voices() {
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

    // Only observe non-card animateOnScroll elements (header, intro, printOnly)
    const elements = sectionRef.current?.querySelectorAll(
      `.${styles.animateOnScroll}:not(.${styles.card})`
    );
    elements?.forEach((el) => observer.observe(el));

    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="voices" className={styles.voices} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <span className={`text-overline ${styles.animateOnScroll}`}>Voices</span>
          <h2 className={styles.animateOnScroll}>Messages carried into the 2026 issue.</h2>
          <p className={`${styles.intro} ${styles.animateOnScroll}`}>
            The issue gathers messages from JCI Philippines officers, the father chapter, and
            sister chapters across Cebu, Davao, Makati, Mandaue, San Pablo, and Surigao.
          </p>
        </div>

        {printOnlyMessages.length > 0 && (
          <div className={`${styles.printOnly} ${styles.animateOnScroll}`}>
            {printOnlyMessages.map((message) => (
              <p key={message}>{message}</p>
            ))}
          </div>
        )}

        <div className={styles.grid}>
          {messages.map((message, index) => (
            <MessageCard key={`${message.author}-${index}`} message={message} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
