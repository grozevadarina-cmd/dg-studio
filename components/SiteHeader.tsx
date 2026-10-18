import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MainNavigation } from "@/components/MainNavigation";
import { MobileNavigation } from "@/components/MobileNavigation";

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <Link
        className="site-logo"
        href={`/${locale}`}
        aria-label={dictionary.siteName}
      >
        <Image
          className="site-logo-image"
          src="/images/brand/dg-logo-dark.jpg"
          alt={dictionary.siteName}
          width={454}
          height={454}
          priority
          sizes="(max-width: 1024px) 76px, 112px"
        />
      </Link>
      <div className="desktop-navigation">
        <MainNavigation
          locale={locale}
          navigation={dictionary.navigation}
        />
        <LanguageSwitcher
          currentLocale={locale}
          label={dictionary.localeIndicator}
        />
      </div>
      <MobileNavigation locale={locale} dictionary={dictionary} />
    </header>
  );
}
