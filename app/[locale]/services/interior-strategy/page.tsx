import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import styles from "../page.module.css";

export default async function ServicePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <main className={styles.page} lang="bg">
      <div className={styles.frame}>
        <h1 className={styles.label}>ИНТЕРИОРНА СТРАТЕГИЯ</h1>

      </div>
    </main>
  );
}
