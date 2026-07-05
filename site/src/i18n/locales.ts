export type Locale =
  | "en"
  | "fr"
  | "da"
  | "de"
  | "es"
  | "pt"
  | "ja"
  | "ko"
  | "vi"
  | "zh-cn"
  | "zh-hk"
  | "ar";

export const LOCALES: Locale[] = [
  "en",
  "fr",
  "da",
  "de",
  "es",
  "pt",
  "ja",
  "ko",
  "vi",
  "zh-cn",
  "zh-hk",
  "ar",
];

/** BCP-47 lang attribute / hreflang value per URL prefix. */
export const LANG_TAG: Record<Locale, string> = {
  en: "en",
  fr: "fr",
  da: "da",
  de: "de",
  es: "es",
  pt: "pt",
  ja: "ja",
  ko: "ko",
  vi: "vi",
  "zh-cn": "zh-CN",
  "zh-hk": "zh-HK",
  ar: "ar",
};

export const RTL: Locale[] = ["ar"];

/** Autonyms for the language selector (SEO map §4: keep it, matching paths). */
export const AUTONYM: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  da: "Dansk",
  de: "Deutsch",
  es: "Español",
  pt: "Português",
  ja: "日本語",
  ko: "한국어",
  vi: "Tiếng Việt",
  "zh-cn": "简体中文",
  "zh-hk": "繁體中文",
  ar: "العربية",
};

export const SITE = "https://www.skydeck.ai";

/** `/`-rooted URL for a locale + locale-relative path ("" | "pricing/pricing/" | …). */
export function localeUrl(locale: Locale, path: string): string {
  return `/${locale}/${path}`;
}

/** Absolute URLs for the full hreflang cluster of one page (+ x-default at root). */
export function alternates(path: string): { hreflang: string; href: string }[] {
  const cluster = LOCALES.map((l) => ({
    hreflang: LANG_TAG[l],
    href: `${SITE}${localeUrl(l, path)}`,
  }));
  cluster.push({ hreflang: "x-default", href: `${SITE}/${path}` });
  return cluster;
}
