'use client';

import { useEffect, useRef } from 'react';
import styles from './Creed.module.css';

export default function Creed() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add(styles.visible);
                });
            },
            { threshold: 0.2 }
        );
        const elements = sectionRef.current?.querySelectorAll(`.${styles.animateOnScroll}`);
        elements?.forEach((el) => observer.observe(el));
        return () => elements?.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <section className={styles.creed} ref={sectionRef}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.content}`}>
                <span className={`${styles.badge} ${styles.animateOnScroll}`}>Our Guiding Principle</span>
                <blockquote className={`${styles.quote} ${styles.animateOnScroll}`} style={{ transitionDelay: '0.1s' }}>
                    <p>We believe that faith in God gives meaning and purpose to human life;</p>
                    <p>That the brotherhood of man transcends the sovereignty of nations;</p>
                    <p>That economic justice can best be won by free men through free enterprise;</p>
                    <p>That government should be of laws rather than of men;</p>
                    <p>That earth&apos;s great treasure lies in human personality;</p>
                    <p>And that service to humanity is the best work of life.</p>
                </blockquote>
                <div className={`${styles.attribution} ${styles.animateOnScroll}`} style={{ transitionDelay: '0.2s' }}>
                    — C. William Brownfield, JCI Senator #1
                </div>
            </div>
        </section>
    );
}
