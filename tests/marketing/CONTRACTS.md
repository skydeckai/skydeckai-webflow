# Marketing Site — Functional Contracts

This is the durable specification of what www.skydeck.ai must always let a visitor
do, independent of any design. **Tests enforce these contracts; designs change,
contracts don't.** When a redesign lands and tests fail, the job is to re-anchor the
tests to the new DOM (see `README.md` — usually only `helpers/anchors.ts` changes),
NOT to delete contracts. Removing or weakening a contract requires product-owner
sign-off, recorded here.

| ID | Contract | Spec file |
|----|----------|-----------|
| C1 | The homepage loads with substantial content (not an error/empty shell) | smoke.spec.ts |
| C2 | A visitor can reach the pricing page from the homepage | pricing.spec.ts |
| C3 | The pricing page shows real prices: ≥3 distinct currency amounts and recurring-billing wording | pricing.spec.ts |
| C4 | A visitor can reach a working sign-up form from the homepage (email + password fields + submit) | auth.spec.ts |
| C5 | A visitor can reach a working sign-in form from the homepage (email + password fields + submit) | auth.spec.ts |
| C6 | A visitor can reach the contact page from the homepage | contact.spec.ts |
| C7 | The contact page presents contact channels (Email / Phone / Support labels) and none of its images are broken (contact details are rendered as images today) | contact.spec.ts |
| C8 | The documentation site is linked and reachable | smoke.spec.ts |
| C9 | Every supported language variant of the homepage loads (12 locales) | i18n-live.spec.ts |
| C10 | Language variants are actually translated: CJK/Hangul/Arabic pages contain their script; Latin-language pages differ substantially from English | i18n-live.spec.ts |
| C11 | Every supported language variant of the pricing page loads and shows prices (spot-checked live; full parity via C12) | i18n-live.spec.ts |
| C12 | i18n artifact parity: every locale ships its strings/copy modules and every English legacy-content page exists in all 11 other locales (the translation pipeline may not silently skip pages) | i18n-parity.spec.ts |
| C13 | Each locale page declares its own `lang` attribute (and `/ar/` is `dir="rtl"`) | i18n-live.spec.ts |

## Known product gaps (documented, not asserted)

- **No contact form exists** — the contact page shows contact info (as images) only.
  If a form is added in the redesign, add a contract (C14: "a visitor can submit the
  contact form and see confirmation") and a spec for it.
- **No sitemap.xml / robots.txt** on the site. Add contracts when introduced.

## Amendment log

- 2026-07-04 — Initial contracts C1–C13 established against the current Webflow
  export (pre-redesign baseline).
- 2026-07-04 — Astro rebuild (Mado design): C13 promoted from `fixme` to enforced
  (the generator now sets per-locale `lang`/`dir`); C12 re-anchored from the old
  export trees to the new translation artifacts under `site/src/`. Functional
  contracts C1–C11 unchanged — they gated the redesign.
