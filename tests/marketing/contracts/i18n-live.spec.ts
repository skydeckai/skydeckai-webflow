import { expect, test } from "@playwright/test";
import {
  LANGS,
  SCRIPT_PATTERNS,
  englishOverlap,
  visibleText,
} from "../helpers/anchors";

test.describe("i18n (live site)", () => {
  for (const lang of LANGS) {
    test(`C9: /${lang}/ homepage loads`, async ({ page }) => {
      const response = await page.goto(`/${lang}/`);
      expect(
        response?.status(),
        `C9: /${lang}/ must respond 200 — this locale disappeared from the deploy. ` +
          "If the redesign changed locale URL structure (e.g. subdomains or ?lang=), " +
          "update LANGS/URL building in helpers/anchors.ts and this spec — the contract " +
          "is that all 12 locales stay reachable.",
      ).toBe(200);
      const text = await visibleText(page);
      expect(
        text.length,
        `C9: /${lang}/ rendered almost no text — likely a broken locale build.`,
      ).toBeGreaterThan(500);
    });
  }

  test("C10: language variants are actually translated, not English copies", async ({
    page,
  }) => {
    await page.goto("/en/");
    const english = await visibleText(page);

    const failures: string[] = [];
    for (const lang of LANGS) {
      if (lang === "en") continue;
      await page.goto(`/${lang}/`);
      const text = await visibleText(page);

      const script = SCRIPT_PATTERNS[lang];
      if (script) {
        const count = (text.match(script) ?? []).length;
        if (count < 50) {
          failures.push(
            `/${lang}/ contains only ${count} characters of its native script — looks untranslated`,
          );
        }
      } else {
        const overlap = englishOverlap(english, text);
        if (overlap > 0.7) {
          failures.push(
            `/${lang}/ shares ${(overlap * 100).toFixed(0)}% of the English page's vocabulary — looks untranslated`,
          );
        }
      }
    }
    expect(
      failures,
      "C10: these locales appear to be serving English (the i18n pipeline regressed " +
        "or was skipped for the latest content):\n  " +
        failures.join("\n  ") +
        "\nRe-run the i18n pipeline for these locales; only re-anchor if locale URLs changed.",
    ).toEqual([]);
  });

  // Currency renders differently across locales: "$19", "19 $", and spelled-out
  // units like Arabic "19 دولار". Extend this pattern when a locale adds its own
  // currency wording — the contract is "an amount of money is recognizable".
  const CURRENCY = /\$\s?\d+|\d+\s?\$|\d+\s?دولار/g;

  for (const lang of ["en", "ja", "ar"] as const) {
    test(`C11: /${lang}/pricing shows prices`, async ({ page }) => {
      const response = await page.goto(`/${lang}/pricing/`);
      expect(
        response?.status(),
        `C11: /${lang}/pricing/ must respond 200 (full cross-locale coverage is enforced ` +
          "structurally by C12 in i18n-parity.spec.ts; this is the live spot-check).",
      ).toBe(200);
      const text = await visibleText(page);
      expect(
        (text.match(CURRENCY) ?? []).length,
        `C11: expected recognizable prices on /${lang}/pricing/ — prices must survive localization ` +
          "(if this locale renders currency in a new way, extend the CURRENCY pattern in this spec).",
      ).toBeGreaterThanOrEqual(3);
    });
  }

  test("C13: each locale page declares its own lang attribute", async ({ page }) => {
    // Enforced since the Astro rebuild — every locale page must declare its own
    // BCP-47 lang (and Arabic must be dir=rtl). A regression here is an
    // SEO/accessibility bug in the site generator, not a content problem.
    for (const lang of LANGS) {
      await page.goto(`/${lang}/`);
      const declared = await page.locator("html").getAttribute("lang");
      expect(
        declared?.toLowerCase().startsWith(lang.split("-")[0]),
        `C13: /${lang}/ declares lang="${declared}" — expected a ${lang} language tag.`,
      ).toBe(true);
      if (lang === "ar") {
        expect(
          await page.locator("html").getAttribute("dir"),
          "C13: /ar/ must declare dir=\"rtl\".",
        ).toBe("rtl");
      }
    }
  });
});
