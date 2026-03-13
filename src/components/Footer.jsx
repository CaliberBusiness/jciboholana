import styles from './Footer.module.css';
import { navigationLinks, projects } from '@/content/homeContent';
import { withBasePath } from '@/lib/assetPath';

const quickLinks = [...navigationLinks, { label: 'Contact', href: '#contact' }];
const featuredStories = projects.slice(0, 4);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const logoSrc = withBasePath('/images/logo.jpg');

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src={logoSrc} alt="JCI Boholana Kisses" className={styles.logoImg} loading="lazy" decoding="async" />
              <div>
                <span className={styles.logoName}>JCI Boholana Kisses</span>
                <span className={styles.logoTagline}>Developing leaders for a changing world.</span>
              </div>
            </div>
            <p className={styles.brandDescription}>
              Issue No. 12 brings the chapter's 2026 leadership, legacy, and OTG impact stories
              into one digital homepage.
            </p>
            <div className={styles.social}>
              <a
                href="https://www.facebook.com/JCIBoholanaKisses"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="mailto:jciboholanakisses2010@gmail.com"
                className={styles.socialLink}
                aria-label="Email"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
              <a
                href="https://jci.cc"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="JCI Global"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.linksColumn}>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4>OTG Stories</h4>
            <ul>
              {featuredStories.map((story) => (
                <li key={story.title}>
                  <a href="#programs">{story.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksColumn}>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:jciboholanakisses2010@gmail.com">jciboholanakisses2010@gmail.com</a>
              </li>
              <li>
                <span>17-E Carlos P. Garcia Avenue, Tagbilaran City</span>
              </li>
              <li>
                <a href="https://jci.cc" target="_blank" rel="noopener noreferrer">
                  Junior Chamber International
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} JCI Boholana Kisses. All rights reserved.</p>
          <p>
            Affiliated with{' '}
            <a href="https://jci.cc" target="_blank" rel="noopener noreferrer">
              Junior Chamber International
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
