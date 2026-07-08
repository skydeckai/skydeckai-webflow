/**
 * Consent-gated analytics bootstrap (bundled external module; CSP allows no
 * inline scripts). Nothing loads until the visitor grants consent — on this
 * page view via the banner's event, or on later views via the stored choice.
 * GTM + GA4 + PostHog (through the t.eastagile.com first-party proxy).
 */
import { CONSENT_KEY, GA4_ID, GTM_ID, POSTHOG } from "../config/analytics";

type PostHogQueueItem = [string, ...unknown[]];

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    posthog?: Record<string, unknown>;
  }
}

let loaded = false;

function loadScript(src: string, onload?: () => void) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  if (onload) s.onload = onload;
  document.head.appendChild(s);
}

function loadAnalytics() {
  if (loaded) return;
  loaded = true;

  // ---- GTM + GA4 ----
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

  // ---- PostHog via first-party proxy ----
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
      ui_host: POSTHOG.uiHost,
      defaults: POSTHOG.defaults,
      person_profiles: "identified_only",
      capture_pageview: true,
    });
    for (const [method, ...args] of stub._q) {
      ph[method]?.(...args);
    }
  });
}

try {
  if (localStorage.getItem(CONSENT_KEY) === "granted") {
    loadAnalytics();
  }
} catch {
  /* storage unavailable → treat as no consent */
}
window.addEventListener("sd-consent-granted", loadAnalytics);

export {};
