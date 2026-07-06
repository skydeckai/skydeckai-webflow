// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.skydeck.ai",
  integrations: [
    mdx(),
    sitemap({
      // Exclude redirect-stub URLs (portfolio/subcategories retired to home/blog;
      // /pricing/pricing/ retired to /pricing/) — they are noindex forwards, not pages.
      filter: (page) =>
        !page.includes("/portfolio/") &&
        !page.includes("/subcategories/") &&
        !page.includes("/pricing/pricing/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // CSP has no unsafe-inline for scripts: every script must be an external file.
    build: { assetsInlineLimit: 0 },
  },
  trailingSlash: "ignore",
});
