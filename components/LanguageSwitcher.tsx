"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, supportedLocales } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

function getLocalizedPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${locale}`;
  }

  segments[0] = locale;
  return `/${segments.join("/")}`;
}

export function LanguageSwitcher({
  currentLocale,
  label,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className="language-switcher">
      {supportedLocales.map((locale) => (
        <Link
          key={locale}
          href={getLocalizedPath(pathname, locale)}
          hrefLang={locale}
          lang={locale}
          aria-current={locale === currentLocale ? "page" : undefined}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
