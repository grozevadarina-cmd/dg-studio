import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjectsByCategory, projectDetailCopy, projectIndexCopy } from "@/content/projects";
import type { Locale } from "@/lib/i18n";
import type { ProjectCategory } from "@/types/project";
import styles from "@/app/[locale]/projects/projects.module.css";

export function ProjectCategoryPage({ locale, category }: { locale: Locale; category: ProjectCategory }) {
  const copy = projectIndexCopy[locale];
  const detailCopy = projectDetailCopy[locale];
  const projects = getProjectsByCategory(locale, category);
  const title = category === "residential" ? copy.residential : copy.commercial;
  const alternateCategory = category === "residential" ? "commercial" : "residential";
  const alternateTitle = alternateCategory === "residential" ? copy.residential : copy.commercial;

  return (
    <main className={styles.projectsPage}>
      <div className={styles.projectsFrame}>
        <header className={`${styles.projectsIntro} ${styles.categoryIntro}`}>
          <h1>{title}</h1>
        </header>
        <section className={`${styles.projectsSection} ${styles.categoryListing}`} aria-label={title}>
          <div className={styles.projectsGrid}>{projects.map((project) => <ProjectCard project={project} locale={locale} key={project.slug} />)}</div>
          <nav className={styles.categoryBottomNav} aria-label={copy.title}>
            <Link href={`/${locale}/projects`}>{detailCopy.allProjects}</Link>
            <span className={styles.categoryBottomSeparator} aria-hidden="true">·</span>
            <Link href={`/${locale}/projects/${alternateCategory}`}>{alternateTitle}</Link>
          </nav>
        </section>
      </div>
    </main>
  );
}
