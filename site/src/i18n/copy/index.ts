import type { Locale } from "../locales";
import { copy as en, type SiteCopy } from "./en";

const modules = import.meta.glob<{ copy: SiteCopy }>("./*.ts", { eager: true });

export function copyFor(locale: Locale): SiteCopy {
  const mod = modules[`./${locale}.ts`];
  return mod?.copy ?? en;
}

export type { SiteCopy };
