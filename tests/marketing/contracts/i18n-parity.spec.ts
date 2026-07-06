import { expect, test } from "@playwright/test";
import * as fs from "node:fs";
import * as path from "node:path";
import { LANGS } from "../helpers/anchors";

/**
 * C12 — artifact-level i18n parity, now against the Astro site's translation
 * artifacts (site/src/…): every English legacy-content JSON must exist for all
 * 11 other locales, and every locale must ship its strings + copy modules.
 * This catches "a page or locale was skipped by the translation pipeline"
 * before deploy, regardless of design.
 */
const repoRoot = path.resolve(__dirname, "../../..");
const siteSrc = path.join(repoRoot, "site", "src");

/**
 * Pages that intentionally serve the English content in every locale (no
 * localized source exists): the two leadership bios. Everything else must be
 * present per locale.
 */
const FALLBACK_OK = new Set([
  "team__lawrence-w-sinclaire.json",
  "team__gary-c-tate.json",
]);

test.describe("i18n (repo artifacts)", () => {
  test.skip(
    !fs.existsSync(path.join(siteSrc, "content-legacy", "en")),
    "site translation artifacts not present (running outside a full checkout)",
  );

  test("C12: every locale ships strings, copy, and all English pages", () => {
    const english = fs
      .readdirSync(path.join(siteSrc, "content-legacy", "en"))
      .filter((f) => f.endsWith(".json"));
    expect(
      english.length,
      "C12: found no English legacy-content JSONs — the content layout moved; update this spec's paths.",
    ).toBeGreaterThan(10);

    const missing: string[] = [];
    for (const lang of LANGS) {
      if (lang === "en") continue;
      if (!fs.existsSync(path.join(siteSrc, "i18n", "strings", `${lang}.json`)))
        missing.push(`i18n/strings/${lang}.json`);
      if (!fs.existsSync(path.join(siteSrc, "i18n", "copy", `${lang}.ts`)))
        missing.push(`i18n/copy/${lang}.ts`);
      for (const file of english) {
        if (FALLBACK_OK.has(file)) continue;
        if (!fs.existsSync(path.join(siteSrc, "content-legacy", lang, file))) {
          missing.push(`content-legacy/${lang}/${file}`);
        }
      }
    }
    expect(
      missing,
      "C12: translation artifacts missing (the i18n pipeline skipped them — produce these " +
        "before deploying):\n  " +
        missing.slice(0, 40).join("\n  ") +
        (missing.length > 40 ? `\n  …and ${missing.length - 40} more` : ""),
    ).toEqual([]);
  });

  test("C12b: legacy content JSONs contain no active-content injection vectors", () => {
    // set:html renders these — repo-committed only, but pin it structurally so a
    // future extraction/translation pass can never smuggle script into pages.
    const offenders: string[] = [];
    const contentRoot = path.join(siteSrc, "content-legacy");
    for (const locale of fs.readdirSync(contentRoot)) {
      const dir = path.join(contentRoot, locale);
      if (!fs.statSync(dir).isDirectory()) continue;
      for (const file of fs.readdirSync(dir)) {
        const raw = fs.readFileSync(path.join(dir, file), "utf8");
        if (/<script|<iframe|<object|<embed|javascript:|onerror=|onload=/i.test(raw)) {
          offenders.push(`${locale}/${file}`);
        }
      }
    }
    expect(
      offenders,
      "C12b: active-content markers found in legacy content JSONs (script/iframe/object/" +
        "event handlers are banned by the extraction rules):\n  " +
        offenders.join("\n  "),
    ).toEqual([]);
  });
});
