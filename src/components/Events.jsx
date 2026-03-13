'use client';

import { useEffect, useRef } from 'react';
import styles from './Events.module.css';

const events = [
    {
        date: 'Mar 7, 2026',
        title: 'Opportunity to Impact',
        description: 'Membership recruitment and orientation for aspiring new members. An open invitation to discover the JCI movement and begin your leadership journey.',
        location: 'Glovasa Bldg, 2nd Flr, M. Torralba St., Tagbilaran City',
        type: 'Recruitment',
    },
    {
        date: 'Feb 22, 2026',
        title: 'JCI Discover & JCI Explore',
        description: 'New member orientation and leadership fundamentals workshop held at Yokoy\'s Cafe, Tagbilaran City.',
        location: "Yokoy's Cafe, Tagbilaran City",
        type: 'Training',
    },
    {
        date: 'Feb 13–15, 2026',
        title: 'GABAY 2026 – Visayas Year 5',
        description: 'LSDD Joyce Trexie Marie Cambangay represents the chapter in the regional skills development conference at Mezzo Hotel, Cebu City.',
        location: 'Mezzo Hotel, Cebu City',
        type: 'Conference',
    },
    {
        date: 'Feb 11, 2026',
        title: 'Love is Not Blind – VAWC Webinar',
        description: 'JCIdeas webinar on "Flirting, Feelings, and the Fine Line of the Law" with Atty. Mary Grace Albaño. Co-hosted with 18+ JCI chapters nationwide.',
        location: 'Online / Virtual',
        type: 'Webinar',
    },
    {
        date: 'Ongoing',
        title: 'Hearts in Bloom 2026',
        description: 'Year-round community outreach initiative bringing love, support, and resources to communities across Bohol.',
        location: 'Bohol-wide',
        type: 'Community',
    },
];

export default function Events() {
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
        <section id="events" className={`section ${styles.events}`} ref={sectionRef}>
            <div className="container">
                <div className={styles.header}>
                    <span className={`section-label ${styles.animateOnScroll}`}>Latest Activity</span>
                    <h2 className={styles.animateOnScroll}>
                        Recent <span style={{ color: 'var(--jci-red)' }}>Events</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {events.map((event, index) => (
                        <div
                            key={event.title}
                            className={`${styles.card} ${styles.animateOnScroll}`}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardDate}>
                                <span>{event.date}</span>
                            </div>
                            <div className={styles.cardBody}>
                                <span className={styles.cardType}>{event.type}</span>
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                                <span className={styles.cardLocation}>📍 {event.location}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`${styles.cta} ${styles.animateOnScroll}`}>
                    <a
                        href="https://www.facebook.com/JCIBoholanaKisses"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-navy"
                    >
                        SEE ALL EVENTS ON FACEBOOK
                    </a>
                </div>
            </div>
        </section>
    );
}
