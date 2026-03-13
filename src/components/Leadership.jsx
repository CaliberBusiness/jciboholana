'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Leadership.module.css';
import { boardMembers, leadershipContent } from '@/content/homeContent';

function getInitials(name) {
  return name
    .replace(/^(Ma\.|Atty\.)\s*/i, '')
    .split(' ')
    .filter((word) => word.length > 1)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

function BoardPortrait({
  member,
  photoClassName = styles.cardPhoto,
  fallbackClassName = styles.cardInitials,
}) {
  const [hasError, setHasError] = useState(false);

  if (!member.image || hasError) {
    return <div className={fallbackClassName}>{getInitials(member.name)}</div>;
  }

  return (
    <img
      src={member.image}
      alt={member.name}
      className={photoClassName}
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
    />
  );
}

export default function Leadership() {
  const sectionRef = useRef(null);
  const boardSeatCount = boardMembers.length + 1;

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
    <section id="leadership" className={styles.leadership} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <span className={`text-overline ${styles.animateOnScroll}`}>{leadershipContent.eyebrow}</span>
          <h2 className={styles.animateOnScroll}>{leadershipContent.title}</h2>
          <p className={`${styles.intro} ${styles.animateOnScroll}`}>{leadershipContent.intro}</p>
        </div>

        <div className={styles.heroLayout}>
          <figure className={`${styles.groupFigure} ${styles.animateOnScroll}`}>
            <img
              src={leadershipContent.groupPhoto}
              alt="JCI Boholana Kisses 2026 board of directors"
              className={styles.groupImage}
              loading="lazy"
              decoding="async"
            />
            <figcaption className={styles.groupCaption}>
              <span className={styles.groupCaptionLabel}>Board Portrait</span>
              <strong>Batch MASARIG - PRISTINE 2026</strong>
              <span>{leadershipContent.groupPhotoCaption}</span>
            </figcaption>
          </figure>

          <section className={`${styles.boardOverview} ${styles.animateOnScroll}`}>
            <div className={styles.boardOverviewHeader}>
              <span className={styles.boardOverviewLabel}>Board Profile</span>
              <h3 className={styles.boardOverviewTitle}>{leadershipContent.boardOverviewTitle}</h3>
            </div>

            <div className={styles.boardOverviewMeta}>
              <div className={styles.metaCard}>
                <strong>{boardSeatCount}</strong>
                <span>Leaders</span>
              </div>
              <div className={styles.metaCard}>
                <strong>2026</strong>
                <span>Term</span>
              </div>
              <div className={styles.metaCard}>
                <strong>JCI</strong>
                <span>Network</span>
              </div>
            </div>

            <div className={styles.boardOverviewBody}>
              {leadershipContent.boardOverview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        </div>

        <div className={`${styles.presidentCard} ${styles.animateOnScroll}`}>
          <div className={styles.presidentPhoto}>
            <img
              src={leadershipContent.president.image}
              alt={leadershipContent.president.name}
              loading="lazy"
              decoding="async"
            />
            <span className={styles.presidentPhotoBadge}>PresTine 2026</span>
          </div>
          <div className={styles.presidentInfo}>
            <span className={styles.presidentRole}>{leadershipContent.president.role}</span>
            <h3 className={styles.presidentName}>{leadershipContent.president.name}</h3>
            <p className={styles.presidentDesc}>{leadershipContent.president.description}</p>
          </div>
        </div>

        <div className={`${styles.boardSectionHeader} ${styles.animateOnScroll}`}>
          <h3 className={styles.boardTitle}>Board of Directors</h3>
          <p className={styles.boardSubtitle}>
            Executive and director roles that carry the chapter&apos;s work from membership to
            community programs.
          </p>
        </div>
        <div className={styles.grid}>
          {boardMembers.map((member, index) => (
            <article
              key={member.name}
              className={`${styles.card} ${styles.animateOnScroll}`}
              style={{ transitionDelay: `${index * 0.04}s` }}
            >
              <div className={styles.cardPhotoWrapper}>
                <BoardPortrait member={member} />
              </div>
              <h4 className={styles.cardName}>{member.name}</h4>
              <span className={styles.cardRole}>{member.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
