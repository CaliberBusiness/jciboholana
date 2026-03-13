'use client';

import styles from './Hero.module.css';
import { heroContent, impactStats } from '@/content/homeContent';
import { withBasePath } from '@/lib/assetPath';

export default function Hero() {
    const heroStats = [impactStats[0], impactStats[1], impactStats[3]];
    const heroBgSrc = withBasePath('/images/group-photo-hero.jpg');
    const heroFallbackSrc = withBasePath('/images/cover.jpg');

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.heroBg}>
                <img
                    src={heroBgSrc}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    onError={(event) => {
                        event.target.onerror = null;
                        event.target.src = heroFallbackSrc;
                    }}
                    alt="JCI Boholana Kisses Chapter Members"
                    className={styles.heroBgImg}
                />
                <div className={styles.heroOverlayDark}></div>
                <div className={styles.heroOverlayGradient}></div>
            </div>

            <div className={`container ${styles.heroContent}`}>
                <div className={styles.heroText}>
                    <span className={styles.heroBadge}>
                        {heroContent.overline} - {heroContent.issue} - {heroContent.date}
                    </span>
                    <span className={styles.issueTheme}>{heroContent.title}</span>

                    <h1 className={styles.hugeTitle}>
                        <span className={styles.titleLine1}>Empowering</span>
                        <span className={styles.titleLine2}>Leaders.</span>
                    </h1>

                    <span className={styles.titleAccent}>President&apos;s message, board leadership, and project stories.</span>
                    <p className={styles.subtitle}>{heroContent.subtitle}</p>

                    <div className={styles.actions}>
                        <a href={heroContent.primaryAction.href} className={`btn btn-primary ${styles.ctaBtn}`}>
                            {heroContent.primaryAction.label}
                        </a>
                        <a
                            href={heroContent.secondaryAction.href}
                            className={`btn btn-outline ${styles.ctaOutline}`}
                        >
                            {heroContent.secondaryAction.label}
                        </a>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <div className={styles.statGroup}>
                        {heroStats.map((stat) => (
                            <div key={stat.label} className={styles.statItem}>
                                <span className={styles.statNumber}>
                                    {stat.value}
                                    {stat.suffix}
                                </span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    <a href="#about" className={styles.scrollIndicator}>
                        <span className={styles.scrollText}>Scroll to chapter</span>
                        <div className={styles.scrollLine}></div>
                    </a>
                </div>
            </div>
        </section>
    );
}
