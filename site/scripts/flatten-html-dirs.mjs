/**
 * Post-build: directories named "*.html" (created by routes whose path ends in
 * .html, e.g. the preserved /about/blog/page1.html pagination URLs) become real
 * files, matching the old export exactly — and keeping the Pages deployment
 * pipeline happy, which rejects .html-named directories.
 */
import { readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dist = new URL("../dist", import.meta.url).pathname;
let flattened = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (name.endsWith(".html")) {
      const index = join(p, "index.html");
      const html = readFileSync(index);
      rmSync(p, { recursive: true });
      writeFileSync(p, html);
      flattened += 1;
    } else {
      walk(p);
    }
  }
}

walk(dist);
console.log(`flatten-html-dirs: ${flattened} directories converted to files`);
