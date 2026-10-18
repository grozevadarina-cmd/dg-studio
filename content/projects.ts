import type { Locale } from "@/lib/i18n";
import type { GalleryLayout, Project, ProjectCategory, ProjectImage } from "@/types/project";

type Localized = Record<Locale, string>;

const copy = {
  residential: { bg: "Жилищен интериор", en: "Residential interior", ru: "Жилой интерьер" },
  commercial: { bg: "Обществен интериор", en: "Commercial interior", ru: "Общественный интерьер" },
  location: { bg: "Локация предстои", en: "Location pending", ru: "Локация уточняется" },
  area: { bg: "площ предстои", en: "area pending", ru: "площадь уточняется" },
  year: { bg: "година предстои", en: "year pending", ru: "год уточняется" },
  status: { bg: "Статус предстои", en: "Status pending", ru: "Статус уточняется" },
  object: { bg: "Временен обект", en: "Temporary property", ru: "Временный объект" },
  descriptionOne: {
    bg: "Това е временно демонстрационно съдържание, което показва предвидената структура на проектната страница. Реалното описание ще бъде добавено заедно с финалните данни за проекта.",
    en: "This is temporary demonstration content showing the intended structure of the project page. The final description will be added with the verified project information.",
    ru: "Это временный демонстрационный текст, показывающий структуру страницы проекта. Финальное описание будет добавлено вместе с подтверждёнными данными проекта.",
  },
  descriptionTwo: {
    bg: "Галерията по-долу използва примерни изображения и предварително зададени editorial композиции. Тя е подготвена за бъдещо свързване със структурирано CMS съдържание.",
    en: "The gallery below uses temporary images and predefined editorial compositions. It is prepared for future connection to structured CMS content.",
    ru: "Галерея ниже использует временные изображения и заданные editorial-композиции. Структура подготовлена для последующего подключения к CMS.",
  },
} satisfies Record<string, Localized>;

const sourceImages = [
  ["/images/home/project-01.png", 1672, 940],
  ["/images/home/project-02.png", 1672, 940],
  ["/images/home/project-03.png", 1672, 940],
  ["/images/home/hero.png", 1500, 1055],
] as const;

const galleryLayouts: GalleryLayout[] = [
  "full",
  "half-half",
  "thirds",
  "full",
  "editorial-asymmetric",
];

function image(index: number, alt: string): ProjectImage {
  const [src, width, height] = sourceImages[index % sourceImages.length];
  return { src, alt, width, height };
}

function createProject(locale: Locale, index: number, category: ProjectCategory): Project {
  const number = String(index + 1).padStart(2, "0");
  const title = {
    bg: `Временен проект ${number}`,
    en: `Temporary project ${number}`,
    ru: `Временный проект ${number}`,
  }[locale];

  return {
    title,
    slug: `temporary-project-${number}`,
    order: 6 - index,
    featuredOnProjectsPage: true,
    featuredOrder: (index % 3) + 1,
    category,
    categoryLabel: copy[category][locale],
    object: index === 0 ? { bg: "Еднофамилна къща, гр. София", en: "Single-family house, Sofia", ru: "Частный дом, София" }[locale] : copy.object[locale],
    location: copy.location[locale],
    area: index === 0 ? { bg: "400 кв.м", en: "400 sq.m", ru: "400 кв.м" }[locale] : copy.area[locale],
    year: copy.year[locale],
    status: index === 0 ? { bg: "В процес на реализация", en: "In progress", ru: "В процессе реализации" }[locale] : copy.status[locale],
    description: [copy.descriptionOne[locale], copy.descriptionTwo[locale]],
    coverImage: image(index, title),
    heroImage: image(index + 1, title),
    gallery: galleryLayouts.map((layout, blockIndex) => {
      const imageCount = layout === "full" ? 1 : layout === "thirds" ? 3 : 2;
      return {
        layout,
        images: Array.from({ length: imageCount }, (_, imageIndex) =>
          image(index + blockIndex + imageIndex, `${title} — ${blockIndex + 1}.${imageIndex + 1}`),
        ),
      };
    }),
  };
}

export const projectIndexCopy: Record<Locale, { title: string; intro: string; residential: string; commercial: string }> = {
  bg: { title: "Проекти", intro: "Временна селекция, подготвена за бъдещото проектно съдържание.", residential: "Жилищен интериорен дизайн", commercial: "Обществен интериорен дизайн" },
  en: { title: "Projects", intro: "A temporary selection prepared for the future project content.", residential: "Residential interior design", commercial: "Commercial interior design" },
  ru: { title: "Проекты", intro: "Временная подборка, подготовленная для будущего содержания проектов.", residential: "Дизайн жилых интерьеров", commercial: "Дизайн общественных интерьеров" },
};

export const projectDetailCopy: Record<Locale, { information: string; type: string; object: string; area: string; stage: string; allProjects: string; close: string; previous: string; next: string }> = {
  bg: { information: "Информация за проект", type: "Тип", object: "Обект", area: "Площ", stage: "Етап", allProjects: "Към всички проекти", close: "Затвори", previous: "Предишно изображение", next: "Следващо изображение" },
  en: { information: "Project information", type: "Type", object: "Property", area: "Area", stage: "Stage", allProjects: "All projects", close: "Close", previous: "Previous image", next: "Next image" },
  ru: { information: "Информация о проекте", type: "Тип", object: "Объект", area: "Площадь", stage: "Этап", allProjects: "Ко всем проектам", close: "Закрыть", previous: "Предыдущее изображение", next: "Следующее изображение" },
};

export function getProjects(locale: Locale) {
  return Array.from({ length: 6 }, (_, index) => createProject(locale, index, index < 3 ? "residential" : "commercial"));
}

export function getProject(locale: Locale, slug: string) {
  return getProjects(locale).find((project) => project.slug === slug);
}

export function getProjectsByCategory(locale: Locale, category: ProjectCategory) {
  return getProjects(locale)
    .filter((project) => project.category === category)
    .sort((first, second) => second.order - first.order);
}

export function getProjectPreviews(locale: Locale, category: ProjectCategory, limit = 3) {
  return getProjectsByCategory(locale, category)
    .filter((project) => project.featuredOnProjectsPage)
    .sort((first, second) => (first.featuredOrder ?? Number.MAX_SAFE_INTEGER) - (second.featuredOrder ?? Number.MAX_SAFE_INTEGER))
    .slice(0, Math.min(limit, 3));
}
