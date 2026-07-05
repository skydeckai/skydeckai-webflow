# Locale agent brief — one agent per non-English locale

Your locale is given in your prompt as {L} (one of: fr da de es pt ja ko vi zh-cn zh-hk ar).
Repo /home/lwsinclair/git-local/skydeckai-webflow, branch feat/astro-site. No branch
switches, no commits. Read site/BUILD-NOTES.md (voice, terminology, non-negotiables)
before writing a single word.

You own exactly three deliverables — nobody else touches these files:

## 1. `site/src/i18n/strings/{L}.json`

Translate `site/src/i18n/strings/en.json` (same keys, same order). UI register per the
Mado guide: calm, plain, professional (de: Sie · fr: vous · ja: です・ます · ko: 합니다 ·
zh-hk: Traditional HK characters · ar: MSA). Keep Latin: SkyDeck, GenStudio,
Control Center — UNLESS the old site's {L} pages consistently translate them (check the
old {L}/ tree's nav/footer and follow its precedent), Claude Code, OpenClaw, Slack,
SOC 2, CASA, "NEW" badge stays NEW.

## 2. `site/src/i18n/copy/{L}.ts`

Translate `site/src/i18n/copy/en.ts` into the SAME TypeScript shape:
`import type { SiteCopy } from "./en"; export const copy: SiteCopy = { … }; export default copy;`
Rules:
- `h1Italic` is the single accent-italic phrase — make it a natural short phrase in {L}.
- Keep `\n` positions in `h1Pre` sensible for {L} (you may move or drop the break).
- NEVER translate: product names (Claude Code, OpenClaw, GenStudio, Control Center,
  Agent Pods may be translated descriptively ONLY if the old {L} site did), commands and
  mono strings (claude-code, openclaw, /workspace, ~/.claude, ⎇ main), the `anchor`
  fields, `iconBg` colors, `icon` emoji, the marquee model names, tag lists' brand items
  (SSO, DLP, RBAC, Slack, HuggingFace stay as-is).
- metaTitle/metaDescription: translate fully (these are the SERP snippets).
- statusWords: translate (running/building/sleeping/stopped as short UI words).
- ar: product/feature names stay Latin script (house rule), prose in Arabic.

## 3. `site/src/content-legacy/{L}/*.json`

Follow site/EXTRACTION-BRIEF.md exactly, using the OLD {L}/ tree as the source
(`{L}/about/security/index.html` etc.). The old {L} pages are already translated — you
are EXTRACTING their content, not re-translating (fix only obvious machine-translation
garbage if you see it, minimally). If a page is missing from the {L} tree, note it in
your report and skip it (the build falls back to English for that path).

## Verify before reporting

`cd site && ASTRO_TELEMETRY_DISABLED=1 PATH=/usr/local/bin:$PATH npx tsc --noEmit -p .`
(if tsconfig complains about unrelated files, at minimum confirm your {L}.ts imports
cleanly) and `npx astro build` (failures naming other agents' files: out of scope, say
so). Report: files written, terminology precedents you followed from the old {L} tree,
pages missing/skipped, anything ambiguous.
