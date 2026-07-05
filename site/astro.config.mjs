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
      filter: (page) => !page.includes("/portfolio/") && !page.includes("/subcategories/"),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  trailingSlash: "ignore",
});
