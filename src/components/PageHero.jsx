import Link from 'next/link';
import styles from './PageHero.module.css';

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  stats = [],
  actions = [],
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className="container">
        {breadcrumbs.length > 0 && (
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            {breadcrumbs.map((item, index) => (
              <span key={item.href} className={styles.crumb}>
                {index > 0 && <span className={styles.separator}>/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span aria-current="page">{item.label}</span>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className="text-overline">{eyebrow}</span>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>

            {actions.length > 0 && (
              <div className={styles.actions}>
                {actions.map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className={action.variant === 'outline' ? 'btn btn-outline' : 'btn btn-primary'}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {stats.length > 0 && (
            <div className={styles.statGrid}>
              {stats.map((stat) => (
                <article key={stat.label} className={styles.statCard}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
