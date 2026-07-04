import { expect, test } from "@playwright/test";
import * as fs from "node:fs";
import * as path from "node:path";
import { LANGS } from "../helpers/anchors";

/**
 * C12 — artifact-level i18n parity. Runs against the repo checkout (no browser,
 * no network): every HTML page in en/ must exist at the same relative path in all
 * other language trees. This is what catches "someone shipped an English page and
 * the translation pipeline never ran" — regardless of design.
 */
const repoRoot = path.resolve(__dirname, "../../..");

function htmlFiles(dir: string, base = dir): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...htmlFiles(p, base));
    else if (entry.name.endsWith(".html")) out.push(path.relative(base, p));
  }
  return out;
}

test.describe("i18n (repo artifacts)", () => {
  test.skip(
    !fs.existsSync(path.join(repoRoot, "en")),
    "repo language trees not present (running outside a full checkout)",
  );

  test("C12: every English page exists in all 11 other locales", () => {
    const english = htmlFiles(path.join(repoRoot, "en"));
    expect(
      english.length,
      "C12: found no English pages under en/ — the checkout layout changed; " +
        "update repoRoot/tree discovery in this spec.",
    ).toBeGreaterThan(5);

    const missing: string[] = [];
    for (const lang of LANGS) {
      if (lang === "en") continue;
      for (const rel of english) {
        if (!fs.existsSync(path.join(repoRoot, lang, rel))) {
          missing.push(`${lang}/${rel}`);
        }
      }
    }
    expect(
      missing,
      "C12: pages missing from language trees (the i18n pipeline skipped them — run it " +
        "for the listed locales before deploying):\n  " +
        missing.slice(0, 40).join("\n  ") +
        (missing.length > 40 ? `\n  …and ${missing.length - 40} more` : ""),
    ).toEqual([]);
  });
});
