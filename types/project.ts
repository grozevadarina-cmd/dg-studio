export type ProjectCategory = "residential" | "commercial";

export type GalleryLayout =
  | "full"
  | "half-half"
  | "two-thirds-one-third"
  | "one-third-two-thirds"
  | "thirds"
  | "quarters"
  | "editorial-asymmetric";

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectGalleryBlock = {
  layout: GalleryLayout;
  images: ProjectImage[];
};

export type Project = {
  title: string;
  slug: string;
  order: number;
  featuredOnProjectsPage: boolean;
  featuredOrder?: number;
  category: ProjectCategory;
  categoryLabel: string;
  object: string;
  location: string;
  area: string;
  year: string;
  status: string;
  description: string[];
  coverImage: ProjectImage;
  heroImage: ProjectImage;
  gallery: ProjectGalleryBlock[];
};
