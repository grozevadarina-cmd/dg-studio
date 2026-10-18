export const supportedLocales = ["bg", "en", "ru"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "bg";

export function isLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale);
}
