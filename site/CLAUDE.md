# site/ — the www.skydeck.ai Astro app

Read **BUILD-NOTES.md** first: it is the implementation spec (Mado design tokens, URL/SEO
non-negotiables, i18n architecture, definition of done). EXTRACTION-BRIEF.md and
LOCALE-BRIEF.md document how the legacy content JSONs were produced.

Dev basics:

- `npm install` then `ASTRO_TELEMETRY_DISABLED=1 npx astro dev` (background it; serves on
  :4321). `npx astro build` -> `dist/`; `npx astro preview` serves the build.
- The functional regression gate lives in `../tests/marketing` (Playwright):
  `BASE_URL=http://localhost:4321 npx playwright test`. Its CONTRACTS.md governs what must
  never break; re-anchor selectors only in `helpers/anchors.ts`.
- All 12 locales build from: `src/i18n/strings/*.json` (chrome), `src/i18n/copy/*.ts`
  (Home + Agent Pods copy), `src/content-legacy/{locale}/*.json` (ported legacy pages,
  English fallback per-path). URL parity with the old site is a hard requirement — never
  rename routes without a 301 story (see the URL & SEO Preservation Map).
