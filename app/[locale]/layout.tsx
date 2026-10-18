import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionaries";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, supportedLocales } from "@/lib/i18n";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DG Interior Design",
  description: "Interior design shaped by people, function, and context.",
};

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} ${montserrat.className}`}
    >
      <body>
        <SiteHeader locale={locale} dictionary={dictionary} />
        {children}
        <SiteFooter locale={locale} dictionary={dictionary} />
      </body>
    </html>
  );
}
