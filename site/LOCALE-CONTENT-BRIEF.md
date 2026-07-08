# Locale translation brief — Agent Pods content wave (2026-07-07)

You translate NEW English marketing content into ONE target locale for www.skydeck.ai.
Repo: /home/lwsinclair/git-local/skydeckai-webflow, branch feat/posthog-consent-and-marketing-improvements (already checked out — do NOT switch branches, do NOT commit, do NOT run npm build).

## Source of truth (English, freshly rewritten)

Under site/src/content-legacy/en/:
1. use-cases__skydeck-ai-collaboration-platform-for-teams.json
2. use-cases__for-ai-driven-development.json
3. use-cases__for-education.json
4. use-cases__for-entrepreneur.json
5. use-cases__for-consultant.json
6. blog__introducing-agent-pods.json  (NEW file)
7. A new blog card prepended in: about__blog.json, about__blog__page1.html.json,
   category__product-update.json, category__product-update__page1.html.json,
   category__product-update__page2.html.json

## Your job for locale <L> (dir site/src/content-legacy/<L>/)

A. For files 1–5: REPLACE the "html", "title", "description", "h1", "lede" fields of the
   existing <L> file with faithful, natural translations of the new EN content. Keep "path"
   and every other field untouched. Preserve the EN HTML structure tag-for-tag
   (h2/h3/p/ul/li/a/strong only).
B. File 6: CREATE <L>/blog__introducing-agent-pods.json as a translation of the EN file —
   same keys, same "path" ("blog/introducing-agent-pods/"), same "ogImage". Translate
   "date" ("July 7, 2026") into the date format used by other blog posts in YOUR locale dir
   (inspect one, e.g. <L>/blog__vendor-lock-in-crisis….json or any post with a date field/cards).
C. File set 7: prepend the SAME new-post card into your locale's copies of those five files
   (skip any that don't exist in your locale). Match the EN card markup exactly, but:
   translate the title text and the "PRODUCT UPDATE · 4 MIN READ · <date>" meta line the way
   the OTHER cards in that same file do it (some locales translate "MIN READ", some keep it);
   keep the img/ogImage src as-is.

## Link + terminology rules (critical)

- Internal links: EN uses /en/... — rewrite to /<L>/... (match how existing <L> files do it).
- admin.skydeck.ai sign-up and docs.skydeck.ai links: match the convention already used in
  the existing <L> use-case files you are replacing (look before you overwrite!). If the old
  file localized the path segment, do the same; if it kept /en/, keep /en/.
- Product names and commands stay Latin/untranslated: SkyDeck.ai, GenStudio, Control Center,
  Agent Pods (product name), Claude Code, OpenClaw, /workspace, ~/.claude, tmux.
- "Driver" (the one-person-holds-the-keyboard role): translate the CONCEPT the way your
  locale's existing agent-pods page copy does (check site/src/i18n/copy/<L>.ts pods section
  for the established term) — consistency with the shipped UI copy beats dictionary choice.
- Tone: calm, plain, technically literate (the site's Mado voice). No hype adjectives.

## Verify before reporting

- python3: json.load every file you wrote (valid JSON, no trailing commas).
- Every file you replaced still has the same set of JSON keys as before (plus none removed).
- grep: no "/en/" internal links remain in YOUR locale's six content files (except where the
  pre-existing convention legitimately keeps /en/ for admin.skydeck.ai — see above).
- Report: files written, the Driver term you used, the date format you used, any anomaly.
