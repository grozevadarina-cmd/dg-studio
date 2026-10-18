import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import styles from "./page.module.css";

type Service = {
  id: string;
  title: string;
  prices: string[];
  packageAmount?: string;
  description: string;
  items?: string[];
  path: string;
};

const packages: Service[] = [
  {
    id: "concept",
    path: "interior-project#concept",
    title: "CONCEPT",
    prices: ["от 25 €/м²"],
    packageAmount: "25",
    description: "Интериорна концепция без пълна техническа документация.",
    items: ["Консултация и анализ", "Функционално разпределение", "Moodboard и стилова посока", "3D визуализации", "Основен подбор на материали"],
  },
  {
    id: "complete",
    path: "interior-project#complete",
    title: "COMPLETE",
    prices: ["от 40 €/м²"],
    packageAmount: "40",
    description: "Цялостен интериорен проект с техническа документация.",
    items: ["Всичко от CONCEPT", "Технически чертежи", "Ел., осветление и ВиК", "Разгъвки и мебели по поръчка", "Подробни спецификации"],
  },
  {
    id: "supervision",
    path: "interior-project#supervision",
    title: "COMPLETE + SUPERVISION",
    prices: ["от 55 €/м²"],
    packageAmount: "55",
    description: "Цялостен проект с авторски надзор при реализацията.",
    items: ["Всичко от COMPLETE", "Авторски надзор", "Посещения на обекта", "Проверка на ключови решения", "Консултации при реализацията"],
  },
];

const services: Service[] = [
  {
    id: "interior-strategy",
    path: "interior-strategy",
    title: "ИНТЕРИОРНА СТРАТЕГИЯ",
    prices: ["до 20 м² – от 450 €", "20–30 м² – от 550 €"],
    description: "Бърза професионална основа за решения за едно помещение или малко пространство.",
  },
  {
    id: "home-staging",
    path: "home-staging",
    title: "HOME STAGING / ПОДГОТОВКА ЗА ПРОДАЖБА ИЛИ ОТДАВАНЕ",
    prices: ["от 800 €"],
    description: "Интериорна подготовка за по-добро представяне на имот пред потенциални купувачи или наематели.",
  },
  {
    id: "property-consultation",
    path: "property-consultation",
    title: "КОНСУЛТАЦИЯ ПРЕДИ ПОКУПКА",
    prices: ["200 €"],
    description: "Професионален поглед върху потенциала и ограниченията на имота преди покупка.",
  },
];

function ServiceOverview({ service, locale, standalone = false }: { service: Service; locale: string; standalone?: boolean }) {
  const Heading = standalone ? "h2" : "h3";

  return (
    <article className={styles.service} aria-labelledby={`${service.id}-overview`}>
      <Heading className={styles.serviceTitle} id={`${service.id}-overview`}>
        {service.id === "supervision" ? <>COMPLETE +<br />SUPERVISION</> : service.title}
      </Heading>
      {service.packageAmount ? (
        <p className={styles.packagePrice}>
          <span className={styles.pricePrefix}>от</span>{" "}
          <span className={styles.priceAmount}>{service.packageAmount}</span>{" "}
          <span className={styles.priceUnit}>€/м²</span>
        </p>
      ) : (
        <p className={styles.price}>
          {service.prices.map((price) => <span key={price}>{price}</span>)}
        </p>
      )}
      <p className={styles.description}>{service.description}</p>
      {service.items && <ul className={styles.items} role="list">
        {service.items.map((item) => <li key={item}>{item}</li>)}
      </ul>}
      <Link className={styles.cta} href={`/${locale}/services/${service.path}`} aria-label={`Научете повече: ${service.title}`}>
        Научете повече
      </Link>
    </article>
  );
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <main className={styles.page} lang="bg">
      <div className={styles.frame}>
        <div className={styles.planLayers} aria-hidden="true">
          <span className={`${styles.planComposition} ${styles.planCompositionTop}`} />
          <span className={`${styles.planComposition} ${styles.planCompositionBottom}`} />
        </div>
        <section className={styles.intro} aria-labelledby="services-title">
          <h1 className={styles.label} id="services-title">УСЛУГИ</h1>
          <p className={styles.introBody}>Различните пространства изискват различна степен на намеса. Услугите могат да бъдат избрани като готов обхват или адаптирани според конкретния проект, етапа на имота и необходимата степен на подкрепа.</p>
        </section>
        <section className={styles.project} aria-labelledby="interior-project-title">
          <h2 className={styles.label} id="interior-project-title">ИНТЕРИОРЕН ПРОЕКТ</h2>
          <div className={styles.comparison}>
            {packages.map((service) => <ServiceOverview key={service.id} service={service} locale={locale} />)}
          </div>
        </section>
        <section className={styles.individual} aria-labelledby="individual-title">
          <h2 className={styles.label} id="individual-title">ИНДИВИДУАЛЕН ОБХВАТ</h2>
          <p>Понякога конкретният проект не се вписва напълно в предварително определен пакет. Услугите могат да бъдат комбинирани или адаптирани според пространството, етапа на имота и необходимата степен на подкрепа.</p>
        </section>
        <div className={`${styles.comparison} ${styles.additional}`}>
          {services.map((service) => <ServiceOverview key={service.id} service={service} locale={locale} standalone />)}
        </div>

      </div>
    </main>
  );
}
