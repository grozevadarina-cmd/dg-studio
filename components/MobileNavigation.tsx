"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { navigationItems } from "@/components/MainNavigation";

type MobileNavigationProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function MobileNavigation({
  locale,
  dictionary,
}: MobileNavigationProps) {
  const pathname = usePathname();

  return (
    <details className="mobile-navigation">
      <summary>{dictionary.menuLabel}</summary>
      <div className="mobile-navigation-panel">
        <nav aria-label="Primary">
          {navigationItems.map(({ key, path }) => {
            const href = `/${locale}${path}`;
            const isActive = path
              ? pathname === href || pathname.startsWith(`${href}/`)
              : pathname === href;

            return (
              <Link
                key={key}
                href={href}
                aria-current={isActive ? "page" : undefined}
              >
                {dictionary.navigation[key]}
              </Link>
            );
          })}
        </nav>
        <LanguageSwitcher
          currentLocale={locale}
          label={dictionary.localeIndicator}
        />
      </div>
    </details>
  );
}
