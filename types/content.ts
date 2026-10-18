import type { Locale } from "@/lib/i18n";

type Localized<T> = Record<Locale, T>;

type LocalizedSeo = Localized<{
  title: string;
  description: string;
}>;

export type Project = {
  id: string;
  title: Localized<string>;
  slug: string;
  location: Localized<string>;
  area: string;
  year: number;
  projectType: string;
  excerpt: Localized<string>;
  narrative: Localized<string>;
  coverImage: string;
  gallery: string[];
  featured: boolean;
  displayOrder: number;
  seo: LocalizedSeo;
};

export type BlogPost = {
  id: string;
  title: Localized<string>;
  slug: string;
  excerpt: Localized<string>;
  body: Localized<string>;
  coverImage: string;
  publishedAt: string;
  category: string;
  relatedProjects: string[];
  featured: boolean;
  seo: LocalizedSeo;
};
