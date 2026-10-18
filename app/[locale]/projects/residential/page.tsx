import { notFound } from "next/navigation";
import { ProjectCategoryPage } from "@/components/ProjectCategoryPage";
import { isLocale } from "@/lib/i18n";

export default async function ResidentialProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ProjectCategoryPage locale={locale} category="residential" />;
}
