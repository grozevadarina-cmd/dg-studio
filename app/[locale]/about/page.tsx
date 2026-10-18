import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { isLocale } from "@/lib/i18n";
import styles from "./page.module.css";

function Paragraphs({ text }: { text: string }) {
  return text.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>);
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const { aboutPage } = getDictionary(locale);

  return (
    <main className={styles.page}>
      <div className={styles.frame}>
        <div className={styles.planLayers} aria-hidden="true">
          <span className={`${styles.planComposition} ${styles.planCompositionTop}`} />
          <span className={`${styles.planComposition} ${styles.planCompositionBottom}`} />
        </div>

        <section className={styles.intro} aria-labelledby="about-title">
          <div className={styles.introIdentity}>
            <h1 className={styles.introLabel} id="about-title">
              {aboutPage.introLabel}
            </h1>
          </div>
          <div className={styles.introBody}><Paragraphs text={aboutPage.introBody} /></div>
        </section>

        <section className={`${styles.section} ${styles.roleSection}`}>
          <p className={styles.label}>{aboutPage.roleLabel}</p>
          <div className={styles.roleComposition}>
            <figure className={styles.portrait}>
              <Image
                className={styles.portraitImage}
                src="/images/about/darina-grozeva.png"
                alt=""
                width={755}
                height={1147}
                sizes="(min-width: 769px) 32vw, 100vw"
              />
            </figure>
            <div className={styles.copy}>
              <h2>{aboutPage.roleTitle}</h2>
              <Paragraphs text={aboutPage.roleBody} />
              <div className={styles.signature}>
                <p>{aboutPage.signatureName}</p>
                <p>{aboutPage.signatureStudio}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.collaborationSection}`}>
          <p className={styles.label}>{aboutPage.collaborationLabel}</p>
          <div className={styles.copy}>
            <h2>{aboutPage.collaborationTitle}</h2>
            <Paragraphs text={aboutPage.collaborationBody} />
          </div>
        </section>

        <section className={`${styles.section} ${styles.clientSection}`}>
          <p className={styles.label}>{aboutPage.clientLabel}</p>
          <div className={styles.copy}>
            <h2>{aboutPage.clientTitle}</h2>
            <ul className={styles.outcomes}>
              {aboutPage.clientItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <div className={styles.ctaRow}>
          <Link className={styles.cta} href={`/${locale}/contacts`}>
            {aboutPage.cta}
          </Link>
        </div>
      </div>
    </main>
  );
}
