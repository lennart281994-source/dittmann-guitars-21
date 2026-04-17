import { useParams } from "react-router-dom";
import { defaultLocale, dict, type Locale, locales, paths, type PathKey } from "./dictionaries";

export function useLocale(): Locale {
  const { locale } = useParams<{ locale?: string }>();
  if (locale && (locales as string[]).includes(locale)) return locale as Locale;
  return defaultLocale;
}

export function useT() {
  const locale = useLocale();
  return { t: dict[locale], locale };
}

export function pathFor(key: PathKey, locale: Locale): string {
  const slug = paths[key][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function switchLocaleHref(currentPath: string, target: Locale): string {
  // currentPath like "/de/instrumente" — find the matching key, swap to target locale slug.
  const segments = currentPath.split("/").filter(Boolean);
  const currentLocale = (segments[0] as Locale) || defaultLocale;
  const slug = segments.slice(1).join("/");

  // Find which path key this slug belongs to in the current locale.
  const entries = Object.entries(paths) as [PathKey, Record<Locale, string>][];
  const match = entries.find(([, map]) => map[currentLocale] === slug);
  const key: PathKey = match ? match[0] : "home";
  return pathFor(key, target);
}
