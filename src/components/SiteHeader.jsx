'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './SiteHeader.module.css';
import { withBasePath } from '@/lib/assetPath';
import { pageLinks } from '@/content/siteNavigation';

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const logoSrc = withBasePath('/images/logo.jpg');

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.shell}>
          <Link href="/" className={styles.brand} onClick={closeMenu}>
            <img
              src={logoSrc}
              alt="JCI Boholana Kisses logo"
              className={styles.logo}
              loading="lazy"
              decoding="async"
            />
            <div>
              <span className={styles.name}>JCI Boholana Kisses</span>
              <span className={styles.tagline}>Leadership and community service in Bohol</span>
            </div>
          </Link>

          <button
            type="button"
            className={styles.toggle}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label="Toggle page navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="site-navigation"
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
            aria-label="Primary"
          >
            {pageLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
