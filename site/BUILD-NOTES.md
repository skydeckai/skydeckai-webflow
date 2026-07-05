# SkyDeck.ai site rebuild — implementation spec (for humans and agents)

Source of truth trio (fetched from the Claude Design project "Skydeck.ai website redesign"):
- `~/git-local/design-inputs/skydeck-site.dc.html` — the site design (NAV/HOME/PODS/FOOTER + all mock data)
- Design & Style Guide ("Mado" system) — tokens/voice (summarized below)
- URL & SEO Preservation Map — URL rules (summarized below)

## Non-negotiables

1. **Aurora hero only.** The design's hero switcher (`heroSwitch`) and Editorial hero are
   exploration aids — do NOT ship them (project CLAUDE.md).
2. **Same path → same page.** Every existing URL is preserved exactly, including
   `/en/pricing/pricing/` and blog slugs. Root serves English; every page also exists
   under all 12 locale prefixes: en fr da de es pt ja ko vi zh-cn zh-hk ar.
   301-style redirect stubs ONLY for `/{lang}/portfolio/*` → `/{lang}/` and
   `/{lang}/subcategories/*` → `/{lang}/about/blog/`. `program-in-english` is KEPT.
3. **SEO carry-over:** per-page `<title>`/meta description ported from the old pages
   (per locale); self-canonical; OG/Twitter tags; hreflang cluster ×12 + `x-default`
   on every page; keep `/google11d07b4fe11fc26c.html`; GTM `GTM-N72P33C2` +
   GA4 `G-0S3DSJDG4H`; generate `sitemap.xml` + `robots.txt`; one `<h1>` per page.
4. **Voice:** agentic-first ("always-on agents your business can actually control");
   GenStudio/chat is supporting. Exact terms: Agent Pods, Claude Code, OpenClaw,
   driver/observer, main terminal, browser pane, auto-sleep/resume, /workspace &
   ~/.claude persistence, spend guardrails, Control Center, GenStudio.
   Avoid: chatbot, copilot, magic, revolutionary, unleash, supercharge, seamless.
5. **No new hues.** Palette below is complete. No purple, no orange, no emoji in UI
   chrome (the design's ✓/status dots/data-display icons from the design doc are fine).

## Mado tokens (global.css `@theme`)

- Paper `#F4EEE1` (canvas) · Warm White `#FBF8F0` (cards) · Pale Indigo `#ECEBF3`
  (bands) · Blue-Ink `#2A336B` (body/primary buttons) · Deep Ink `#1E2447`
  (headings/dark bands, CTA `#1E2447`, footer `#161B3A`) · Accent `#3A4FA0`
  (links/eyebrows/italic emphasis) · Ink-Soft `#5A5F78` · Faint `#8A8FA6` ·
  Hairline `rgba(42,51,107,.14)`
- Status: running `#2F8F5F` · building/sleeping `#B58A34` · stopped `#8A8FA6`
- Type: Source Serif 4 (display+body; 600 display w/ -.02em; one *italic accent*
  phrase per headline) + JetBrains Mono (code/labels). Body ≥13px.
- Buttons: primary ink pill r10 (`#2A336B` on paper / inverted on dark);
  secondary outline `rgba(42,51,107,.28)`. Cards: warm-white, hairline, r16–22,
  shadow `0 14px 44px rgba(30,36,71,.06)`. Sections 80–96px; max-width 1140–1200px.
  Motion: soft parallax blobs, on-scroll fade/rise only.
- App mocks: deep-indigo IDE chrome (`#0F1330`/`#141834`/`#10132E`, text `#E9EAF6`,
  accent `#8590E8`) — port the design's React mocks as static HTML/CSS.

## Structure

- `src/styles/global.css` — tokens + shared classes (eyebrow, btn, card, band, section)
- `src/layouts/Base.astro` — full head (meta/hreflang/GTM/fonts), nav + footer slots
- `src/components/` — Nav, Footer, CtaBand, mocks/{Workspace,PodPane,Launcher,Budget,Convos}
- `src/i18n/` — locale list + per-locale UI strings; page copy per locale
- `src/pages/` — explicit locale trees to guarantee exact URL parity
- Old-site content source: repo root language dirs (en/, fr/, … zh-hk/) — port copy,
  never link old CSS. Old assets reused from `/assets/` (logo, SOC2/CASA badges, blog
  images) — copy needed files into `site/public/assets/` keeping the same filenames.

## Definition of done (today)

`cd tests/marketing && BASE_URL=http://localhost:4321 npx playwright test` → C1–C12
green + C13 un-fixme'd and green; then Actions workflow builds `site/` → Pages,
contract suite green against production.
