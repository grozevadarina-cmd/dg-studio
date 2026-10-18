import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import styles from "./page.module.css";

type Service = {
  id: string;
  title: string;
  prices: string[];
  description: string;
  items: string[];
};

const packages: Service[] = [
  {
    id: "concept",
    title: "CONCEPT",
    prices: ["от 25 €/м²"],
    description: "Професионално разработена концепция за пространството без пълна техническа документация.",
    items: ["Консултация и анализ", "Функционално разпределение", "Стилова и материална посока", "Moodboard", "3D визуализации", "Основен продуктов подбор"],
  },
  {
    id: "complete",
    title: "COMPLETE",
    prices: ["от 40 €/м²"],
    description: "Цялостен интериорен проект с подробна техническа документация и подготовка за реализация.",
    items: ["Всичко от CONCEPT", "Технически чертежи", "Ел., осветление и ВиК", "Разгъвки и детайли", "Мебели по поръчка", "Пълни спецификации"],
  },
  {
    id: "complete-supervision",
    title: "COMPLETE + SUPERVISION",
    prices: ["от 55 €/м²"],
    description: "Цялостен проект с последващо авторско проследяване на реализацията.",
    items: ["Всичко от COMPLETE", "Авторски надзор", "Посещения на обекта", "Проверка на ключови решения", "Консултации по проектни въпроси", "Проследяване на изпълнението"],
  },
];

const services: Service[] = [
  {
    id: "interior-strategy",
    title: "ИНТЕРИОРНА СТРАТЕГИЯ",
    prices: ["до 20 м² – от 450 €", "20–30 м² – от 550 €"],
    description: "Бърза професионална основа за решения за едно помещение или малко пространство.",
    items: ["Анализ на пространството", "Функционална логика", "Стилова посока", "Цветове и материали", "Насоки за обзавеждане"],
  },
  {
    id: "home-staging",
    title: "HOME STAGING / ПОДГОТОВКА НА ИМОТ ЗА ПРОДАЖБА ИЛИ ОТДАВАНЕ",
    prices: ["от 800 €"],
    description: "Интериорна подготовка за по-добро представяне на имот пред потенциални купувачи или наематели.",
    items: ["Оглед и анализ", "Концепция за подобрение", "Подбор на мебели и декорация", "Shopping list", "Финално стилизиране"],
  },
  {
    id: "pre-purchase-consultation",
    title: "КОНСУЛТАЦИЯ ПРЕДИ ПОКУПКА",
    prices: ["200 €"],
    description: "Професионален поглед върху потенциала и ограниченията на имота преди покупка.",
    items: ["Оглед на място", "Анализ на разпределението", "Оценка на потенциала", "Възможни ограничения", "Професионално мнение"],
  },
];

function ServiceOverview({ service, standalone = false }: { service: Service; standalone?: boolean }) {
  const Heading = standalone ? "h2" : "h3";

  return (
    <article className={styles.service} aria-labelledby={`${service.id}-overview`}>
      <Heading className={styles.serviceTitle} id={`${service.id}-overview`}>{service.title}</Heading>
      <p className={styles.price}>
        {service.prices.map((price) => <span key={price}>{price}</span>)}
      </p>
      <p className={styles.description}>{service.description}</p>
      <ul className={styles.items}>
        {service.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <a className={styles.cta} href={`#${service.id}`} aria-label={`Научете повече: ${service.title}`}>
        Научете повече
      </a>
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
            {packages.map((service) => <ServiceOverview key={service.id} service={service} />)}
          </div>
        </section>
        <section className={styles.individual} aria-labelledby="individual-title">
          <h2 className={styles.label} id="individual-title">ИНДИВИДУАЛЕН ОБХВАТ</h2>
          <p>Понякога конкретният проект не се вписва напълно в предварително определен пакет. Услугите могат да бъдат комбинирани или адаптирани според пространството, етапа на имота и необходимата степен на подкрепа.</p>
        </section>
        <div className={`${styles.comparison} ${styles.additional}`}>
          {services.map((service) => <ServiceOverview key={service.id} service={service} standalone />)}
        </div>
        <div className={styles.details}>
          {[...packages, ...services].map((service) => (
            <section className={styles.detail} id={service.id} key={service.id} aria-labelledby={`${service.id}-title`} tabIndex={-1}>
              <h2 className={styles.label} id={`${service.id}-title`}>{service.title}</h2>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
