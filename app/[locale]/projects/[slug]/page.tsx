import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGallery } from "@/components/ProjectGallery";
import { getProject, getProjects, projectDetailCopy } from "@/content/projects";
import { isLocale, supportedLocales } from "@/lib/i18n";
import styles from "../projects.module.css";

export function generateStaticParams() {
  return supportedLocales.flatMap((locale) => getProjects(locale).map((project) => ({ locale, slug: project.slug })));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProject(locale, slug);
  if (!project) notFound();
  const copy = projectDetailCopy[locale];
  const facts = [
    { number: "01", label: copy.type, value: project.categoryLabel },
    { number: "02", label: copy.object, value: project.object },
    { number: "03", label: copy.area, value: project.area },
    { number: "04", label: copy.stage, value: project.status },
  ];

  return (
    <main className={styles.detailPage}>
      <section className={styles.detailHero} aria-label={project.title}>
        <Image className={styles.detailHeroImage} src={project.heroImage.src} alt={project.heroImage.alt} width={project.heroImage.width} height={project.heroImage.height} sizes="100vw" priority />
      </section>
      <section className={styles.projectFacts}>
        <span className={styles.factsPlan} aria-hidden="true" />
        <div className={styles.factsInner}>
          <h1 id="project-title">{project.title}</h1>
          <dl>{facts.map((fact) => <div key={fact.number}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
        </div>
      </section>
      <div className={styles.detailFrame}>
        <section className={styles.projectDescription}>{project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
        <ProjectGallery blocks={project.gallery} labels={{ close: copy.close, previous: copy.previous, next: copy.next }} />
        <div className={styles.backRow}><Link className={styles.backLink} href={`/${locale}/projects`}>{copy.allProjects}</Link></div>
      </div>
    </main>
  );
}
