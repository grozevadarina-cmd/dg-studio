import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { isLocale } from "@/lib/i18n";

const projectImageSources = [
  "/images/home/project-01.png",
  "/images/home/project-02.png",
  "/images/home/project-03.png",
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { home } = getDictionary(locale);

  return (
    <main className="home-page">
      <div className="home-frame">
        <div className="home-plan-layers" aria-hidden="true">
          <span className="home-plan-fragment home-plan-fragment-top" />
          <span className="home-plan-fragment home-plan-fragment-middle" />
          <span className="home-plan-fragment home-plan-fragment-bottom" />
        </div>
        <div className="home-frame-inner">
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero-copy">
          <h1 id="home-hero-title">{home.hero.title}</h1>
          <div className="home-hero-body">
            {home.hero.supportingText.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link className="home-cta" href={`/${locale}/projects`}>
            {home.hero.cta}
          </Link>
        </div>
        <figure className="home-hero-image placeholder-image">
          <Image
            src="/images/home/hero.png"
            alt=""
            width={1499}
            height={1049}
            priority
            sizes="100vw"
          />
        </figure>
      </section>

      <section className="home-text-section home-approach">
        <p className="section-label">{home.approach.label}</p>
        <div>
          <h2>{home.approach.title}</h2>
          <div className="home-section-body">
            {home.approach.body.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        className="home-projects"
        aria-labelledby="selected-projects-label"
      >
        <div className="section-heading">
          <p className="section-label" id="selected-projects-label">
            {home.selectedProjects.label}
          </p>
        </div>
        <div className="project-grid">
          {home.selectedProjects.items.map((project, index) => (
            <article className="project-preview" key={project.title}>
              <figure className="placeholder-image">
                <Image
                  src={projectImageSources[index]}
                  alt=""
                  width={1672}
                  height={941}
                  sizes="(min-width: 1025px) 33vw, (min-width: 769px) 50vw, 100vw"
                />
              </figure>
              <div className="project-meta">
                <h3>
                  {project.title}
                  {project.location ? `, ${project.location}` : ""}
                </h3>
              </div>
            </article>
          ))}
        </div>
        <div className="home-secondary-cta-row">
          <Link
            className="home-cta home-secondary-cta"
            href={`/${locale}/projects`}
          >
            {home.selectedProjects.cta}
          </Link>
        </div>
      </section>

      <section className="home-text-section home-services">
        <p className="section-label">{home.services.label}</p>
        <div>
          <h2>{home.services.title}</h2>
          <div className="home-section-body">
            {home.services.body.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link className="home-cta" href={`/${locale}/services`}>
            {home.services.cta}
          </Link>
        </div>
      </section>

      <section className="home-process" aria-labelledby="process-title">
        <div className="section-heading">
          <p className="section-label">{home.process.label}</p>
          <h2 id="process-title">{home.process.title}</h2>
        </div>
        <ol className="process-list">
          {home.process.steps.map((step) => (
            <li key={step.number}>
              <p className="process-number">{step.number}</p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="home-secondary-cta-row">
          <Link
            className="home-cta home-secondary-cta"
            href={`/${locale}/process`}
          >
            {home.process.cta}
          </Link>
        </div>
      </section>

      <section className="home-text-section home-about">
        <p className="section-label">{home.about.label}</p>
        <div>
          <h2>{home.about.title}</h2>
          <div className="home-section-body">
            {home.about.body.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link className="home-cta" href={`/${locale}/about`}>
            {home.about.cta}
          </Link>
        </div>
      </section>

      <section className="home-contact">
        <p className="section-label">{home.contact.label}</p>
        <div className="home-contact-content">
          <h2>{home.contact.title}</h2>
          <div className="home-contact-copy">
            <p>{home.contact.body}</p>
            <Link className="home-cta" href={`/${locale}/contacts`}>
              {home.contact.cta}
            </Link>
          </div>
        </div>
      </section>
        </div>
      </div>
    </main>
  );
}
