import { notFound } from "next/navigation";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjectPreviews, projectIndexCopy } from "@/content/projects";
import { isLocale } from "@/lib/i18n";
import styles from "./projects.module.css";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = projectIndexCopy[locale];
  const sections = [
    { key: "residential", title: copy.residential },
    { key: "commercial", title: copy.commercial },
  ] as const;

  return (
    <main className={styles.projectsPage}>
      <div className={styles.projectsFrame}>
        <header className={styles.projectsIntro}>
          <h1>{copy.title}</h1>
        </header>
        {sections.map((section) => (
          <section className={styles.projectsSection} aria-labelledby={`${section.key}-title`} key={section.key}>
            <h2 id={`${section.key}-title`}><Link href={`/${locale}/projects/${section.key}`}>{section.title}</Link></h2>
            <div className={styles.projectsGrid}>
              {getProjectPreviews(locale, section.key, 3).map((project) => <ProjectCard project={project} locale={locale} key={project.slug} />)}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
