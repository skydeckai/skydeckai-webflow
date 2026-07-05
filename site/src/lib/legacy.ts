import type { Locale } from "../i18n/locales";

/**
 * Legacy page content ported from the old export.
 * File convention: src/content-legacy/{locale}/{key}.json where key is the
 * locale-relative URL path with "/" → "__" and any trailing slash dropped
 * (e.g. "about/security/" → about__security.json,
 *  "about/blog/page1.html" → about__blog__page1.html.json).
 */
export interface LegacyEntry {
  /** locale-relative URL path: "about/security/" or "about/blog/page1.html" */
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow?: string;
  lede?: string;
  date?: string;
  author?: string;
  ogImage?: string;
  html: string;
}

const files = import.meta.glob<LegacyEntry>("../content-legacy/*/*.json", {
  eager: true,
  import: "default",
});

const byLocale = new Map<string, Map<string, LegacyEntry>>();
for (const [file, entry] of Object.entries(files)) {
  const match = file.match(/content-legacy\/([^/]+)\//);
  if (!match) continue;
  const locale = match[1];
  if (!byLocale.has(locale)) byLocale.set(locale, new Map());
  byLocale.get(locale)!.set(entry.path, entry);
}

/** All entries for a locale, falling back to English content when missing. */
export function legacyEntries(locale: Locale): LegacyEntry[] {
  const en = byLocale.get("en") ?? new Map<string, LegacyEntry>();
  const loc = byLocale.get(locale) ?? new Map<string, LegacyEntry>();
  return [...en.keys()].map((path) => loc.get(path) ?? en.get(path)!);
}

export function legacyEntry(locale: Locale, path: string): LegacyEntry | undefined {
  return byLocale.get(locale)?.get(path) ?? byLocale.get("en")?.get(path);
}

/** slug param for Astro rest routes ("about/security/" → "about/security") */
export function slugOf(path: string): string {
  return path.replace(/\/$/, "");
}
