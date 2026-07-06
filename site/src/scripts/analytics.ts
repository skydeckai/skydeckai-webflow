/**
 * Analytics bootstrap as a bundled external module (CSP: no inline scripts).
 * GTM + GA4 always; PostHog alongside when a key is configured.
 */
import { GA4_ID, GTM_ID, POSTHOG } from "../config/analytics";

type PostHogQueueItem = [string, ...unknown[]];

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    posthog?: Record<string, unknown>;
  }
}

function loadScript(src: string, onload?: () => void) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  if (onload) s.onload = onload;
  document.head.appendChild(s);
}

// ---- GTM + GA4 (equivalent to the standard inline snippets) ----
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

function gtag(...args: unknown[]) {
  window.dataLayer.push(args);
}
window.gtag = gtag;
gtag("js", new Date());
gtag("config", GA4_ID);

loadScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`);

// ---- PostHog (dormant until a project key is configured) ----
if (POSTHOG.key) {
  const stub: Record<string, unknown> & { _q: PostHogQueueItem[] } = { _q: [] };
  for (const m of [
    "init",
    "capture",
    "identify",
    "alias",
    "register",
    "reset",
    "group",
    "opt_in_capturing",
    "opt_out_capturing",
  ]) {
    stub[m] = (...args: unknown[]) => stub._q.push([m, ...args]);
  }
  window.posthog = window.posthog || (stub as unknown as Window["posthog"]);

  loadScript(`${POSTHOG.assetsHost}/static/array.js`, () => {
    const ph = window.posthog as Record<string, (...a: unknown[]) => void>;
    ph.init?.(POSTHOG.key, {
      api_host: POSTHOG.apiHost,
      defaults: "2025-05-24",
      capture_pageview: true,
      persistence: "localStorage+cookie",
    });
    for (const [method, ...args] of stub._q) {
      ph[method]?.(...args);
    }
  });
}

export {};
