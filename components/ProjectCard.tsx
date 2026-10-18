import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Project } from "@/types/project";
import styles from "@/app/[locale]/projects/projects.module.css";

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <article className={styles.projectCard}>
      <Link className={styles.projectLink} href={`/${locale}/projects/${project.slug}`}>
        <span className={styles.projectImageFrame}>
          <Image
            className={styles.projectImage}
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            width={project.coverImage.width}
            height={project.coverImage.height}
            sizes="(min-width: 1200px) 30vw, (min-width: 641px) 46vw, 100vw"
          />
        </span>
        <span className={styles.projectCaption}>
          <strong>{project.title}</strong>
          <span>{[project.categoryLabel, project.area, project.location, project.year].filter(Boolean).join(" · ")}</span>
        </span>
      </Link>
    </article>
  );
}
