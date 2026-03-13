'use client';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { navigationLinks } from '@/content/homeContent';
import { withBasePath } from '@/lib/assetPath';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const logoSrc = withBasePath('/images/logo.jpg');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);

      const sections = navigationLinks.map((link) => link.href.replace('#', ''));

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const element = document.getElementById(sections[i]);

        if (element && element.getBoundingClientRect().top <= 140) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLinkClick = (event, href) => {
    event.preventDefault();
    setMobileOpen(false);

    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <button
        type="button"
        className={`${styles.mobileBackdrop} ${mobileOpen ? styles.mobileBackdropVisible : ''}`}
        aria-label="Close menu"
        aria-hidden={!mobileOpen}
        tabIndex={mobileOpen ? 0 : -1}
        onClick={() => setMobileOpen(false)}
      />

      <div className={`container ${styles.navContainer}`}>
        <a href="#home" className={styles.logo} onClick={(event) => handleLinkClick(event, '#home')}>
          <img src={logoSrc} alt="JCI Boholana Kisses Logo" className={styles.logoImg} decoding="async" />
          <div className={styles.logoText}>
            <span className={styles.logoName}>JCI Boholana Kisses</span>
          </div>
        </a>

        <div className={styles.desktopNav}>
          <div className={styles.navLinks}>
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${
                  activeSection === link.href.replace('#', '') ? styles.active : ''
                }`}
                onClick={(event) => handleLinkClick(event, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className={`btn btn-primary ${styles.navCta}`}
            onClick={(event) => handleLinkClick(event, '#contact')}
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
      >
        {navigationLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`${styles.navLink} ${
              activeSection === link.href.replace('#', '') ? styles.active : ''
            }`}
            onClick={(event) => handleLinkClick(event, link.href)}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          className={`btn btn-primary ${styles.mobileNavCta}`}
          onClick={(event) => handleLinkClick(event, '#contact')}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
