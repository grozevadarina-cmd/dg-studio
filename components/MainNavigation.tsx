"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";

export const navigationItems = [
  { key: "home", path: "" },
  { key: "about", path: "/about" },
  { key: "projects", path: "/projects" },
  { key: "services", path: "/services" },
  { key: "process", path: "/process" },
  { key: "blog", path: "/blog" },
  { key: "contacts", path: "/contacts" },
] as const satisfies ReadonlyArray<{
  key: keyof Dictionary["navigation"];
  path: string;
}>;

type MainNavigationProps = {
  locale: Locale;
  navigation: Dictionary["navigation"];
};

export function MainNavigation({ locale, navigation }: MainNavigationProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="main-navigation">
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
            {navigation[key]}
          </Link>
        );
      })}
    </nav>
  );
}
