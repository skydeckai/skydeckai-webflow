# Legacy content extraction brief (EN and locale agents)

Repo: /home/lwsinclair/git-local/skydeckai-webflow, branch feat/astro-site. Never switch
branches, never commit. The OLD site is at the repo root (per-locale trees: en/, fr/, da/,
de/, es/, pt/, ja/, ko/, vi/, zh-cn/, zh-hk/, ar/). The NEW site is site/ (Astro).
Read site/BUILD-NOTES.md first.

## Deliverable

One JSON file per page in `site/src/content-legacy/{locale}/`, named by the
locale-relative URL path with `/` → `__` and the trailing slash dropped:

- `about/security/` → `about__security.json`
- `about/blog/page1.html` → `about__blog__page1.html.json`

Schema (all fields JSON strings; omit optional fields you can't fill):

```json
{
  "path": "about/security/",
  "title": "<old page <title> text>",
  "description": "<old page meta description; write a faithful 1-sentence one if missing>",
  "h1": "<page's main heading text>",
  "lede": "<optional subtitle paragraph if the page has one>",
  "date": "<blog posts: publish date as shown>",
  "author": "<blog posts: author if shown>",
  "ogImage": "/assets/<file>.png",
  "html": "<main content HTML — see rules>"
}
```

## Page set (identical for every locale; source = `{locale}/<path>/index.html` or `.html` file)

- `pricing/pricing/`
- `about/about-skydeckai/` · `about/security/` · `about/skydeck-contact-us/`
- `about/blog/` and `about/blog/page1.html`, `page2.html`, `page3.html`
- `use-cases/skydeck-ai-collaboration-platform-for-teams/`, `use-cases/for-ai-driven-development/`,
  `use-cases/for-education/`, `use-cases/for-entrepreneur/`, `use-cases/for-consultant/`
- `team/lawrence-w-sinclaire/` · `team/gary-c-tate/`
- `category/industry-insights/` · `category/use-cases/` · `category/product-update/` and
  `category/product-update/page1.html`, `page2.html`
- every post directory under `{locale}/blog/` (enumerate with ls — include ALL of them,
  including program-in-english)
- `404/` · `401/`

Do NOT extract: portfolio/*, subcategories/*, search (handled elsewhere).

## HTML extraction rules

1. Take only the page's MAIN content: everything that is not the shared nav bar, mega-menu,
   footer, language switcher, or cookie scripts. Blog index/category pages: the post-card
   list becomes a simple list of linked headings + excerpt paragraphs + thumbnail imgs.
2. Strip to semantic tags only: h2 h3 h4 p ul ol li a img blockquote strong em code table
   tr td th figure figcaption br. Remove ALL class/id/style/data-* attributes (keep a.href,
   img.src, img.alt, a.target/rel for external links).
3. Remove the page's h1 from html (the layout renders `h1` separately). If the first
   paragraph is clearly a standalone subtitle, move it to `lede` instead of html.
4. Image srcs: `../assets/x.png`, `/assets/x.png`, `assets/x.png` → `/assets/x.png`.
   Remote `website-files.com` images: check whether the basename exists in the old local
   `/assets/`; if yes use `/assets/<basename>`; if not, DOWNLOAD it with curl into
   `site/public/assets/<basename>` and reference `/assets/<basename>`.
5. Internal links: keep locale-prefixed absolute paths (`/en/...` stays `/en/...`;
   resolve any relative hrefs against the page's URL). External links keep
   `target="_blank" rel="noopener noreferrer"` if the old page had them.
6. Buttons/CTAs in content ("Get started", pricing plan buttons): render as
   `<p><a href="https://admin.skydeck.ai/en/sign-up/">…</a></p>` (or their original
   target if it was a different real URL).
7. Pricing page: preserve EVERY plan name, dollar amount, per-period wording, and feature
   list as clean tables or heading+list blocks — the live contract tests assert ≥3 distinct
   $ amounts and recurring-billing wording on every locale's pricing page.
8. Contact page: preserve the Email / Phone number / Mail / Support labels AND their
   info images (they are images by design — keep `<img>` with local /assets srcs;
   download from CDN per rule 4 if needed). The contract tests check these labels and
   that no image on the page is broken.
9. Validity: the html value must be a valid JSON string (escape as needed); no <script>,
   no <style>, no iframes.
10. 401/404: short pages — h1 + a paragraph + a link home is enough (match the old text).

## Verification (every agent, before reporting)

`cd site && ASTRO_TELEMETRY_DISABLED=1 PATH=/usr/local/bin:$PATH npx astro build`
must succeed with your JSONs included (build failures naming another agent's files are
out of scope — say so). Then spot-open 2–3 built pages under `site/dist/` and confirm
your content rendered.
