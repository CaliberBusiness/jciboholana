import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import SiteHeader from '@/components/SiteHeader';
import StructuredData from '@/components/StructuredData';
import styles from './page.module.css';
import { getAllProjectSlugs, getProjectBySlug, projectItems } from '@/lib/projects';
import {
  createMetadata,
  createPageStructuredData,
  getAbsoluteUrl,
  organizationId,
} from '@/lib/site';

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return createMetadata({
    title: `${project.title} | JCI Boholana Kisses Project`,
    description: project.summary,
    path: `/projects/${project.slug}`,
    keywords: [
      project.title,
      project.category,
      'JCI Boholana Kisses project',
      'community outreach Bohol',
    ],
    imagePath: project.image || '/opengraph-image.jpg',
    imageAlt: `${project.title} community project by JCI Boholana Kisses`,
  });
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbs = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: `/projects/${project.slug}`, label: project.title },
  ];

  const structuredData = createPageStructuredData({
    path: `/projects/${project.slug}`,
    title: `${project.title} | JCI Boholana Kisses Project`,
    description: project.summary,
    type: 'WebPage',
    imagePath: project.image || '/opengraph-image.jpg',
    breadcrumbs,
    mainEntity: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${getAbsoluteUrl(`/projects/${project.slug}`)}#article`,
      headline: `${project.title} | JCI Boholana Kisses Project`,
      description: project.summary,
      articleSection: project.category,
      author: {
        '@id': organizationId,
      },
      publisher: {
        '@id': organizationId,
      },
      mainEntityOfPage: {
        '@id': `${getAbsoluteUrl(`/projects/${project.slug}`)}#webpage`,
      },
      image: getAbsoluteUrl(project.image || '/opengraph-image.jpg'),
    },
  });

  const relatedProjects = projectItems
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <StructuredData data={structuredData} />
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow={project.category}
          title={project.title}
          description={project.summary}
          breadcrumbs={breadcrumbs}
          stats={[
            { value: project.category, label: 'project focus' },
            { value: `${project.highlights.length}`, label: 'key story highlights' },
            { value: 'Bohol', label: 'community context' },
          ]}
          actions={[
            { href: '/projects', label: 'Back to all projects' },
            { href: '/#contact', label: 'Partner with the chapter', variant: 'outline' },
          ]}
        />

        <section className={styles.section}>
          <div className="container">
            <div className={styles.heroGrid}>
              <figure className={styles.mediaCard}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} community project by JCI Boholana Kisses`}
                    className={styles.image}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className={styles.placeholder}>
                    <span>{project.category}</span>
                    <strong>{project.placeholderLabel || project.title}</strong>
                  </div>
                )}
              </figure>

              <aside className={styles.metaCard}>
                <span className="text-overline">Project Snapshot</span>
                <h2>What this project focused on.</h2>
                <ul className={styles.metaList}>
                  <li>
                    <span className={styles.metaLabel}>Category</span>
                    <span className={styles.metaValue}>{project.category}</span>
                  </li>
                  <li>
                    <span className={styles.metaLabel}>Story format</span>
                    <span className={styles.metaValue}>Issue feature</span>
                  </li>
                  <li>
                    <span className={styles.metaLabel}>Chapter</span>
                    <span className={styles.metaValue}>JCI Boholana Kisses</span>
                  </li>
                </ul>

                <span className={styles.highlightTitle}>Highlights</span>
                <ul className={styles.highlightList}>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </aside>
            </div>

            <article className={styles.bodyCard}>
              <span className="text-overline">Project Story</span>
              {project.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>

            <section className={styles.relatedSection}>
              <span className="text-overline">Related Projects</span>
              <div className={styles.relatedGrid}>
                {relatedProjects.map((relatedProject) => (
                  <article key={relatedProject.slug} className={styles.relatedCard}>
                    <span className={styles.highlightTitle}>{relatedProject.category}</span>
                    <h3>{relatedProject.title}</h3>
                    <p>{relatedProject.summary}</p>
                    <Link href={relatedProject.href} className={styles.relatedLink}>
                      Read project page
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            <div className={styles.actionStrip}>
              <p>
                This project is one part of the chapter&apos;s wider service work in Bohol. Explore
                the full portfolio or contact JCI Boholana Kisses to support future initiatives.
              </p>
              <div className={styles.actionLinks}>
                <Link href="/projects" className="btn btn-primary">
                  View all projects
                </Link>
                <Link href="/#contact" className="btn btn-outline">
                  Contact the chapter
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
