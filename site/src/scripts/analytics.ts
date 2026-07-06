/**
 * GTM + GA4 bootstrap as a bundled external module (CSP: no inline scripts).
 * Equivalent to the standard inline snippets; module timing (deferred) is fine
 * for analytics.
 */
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

function gtag(...args: unknown[]) {
  window.dataLayer.push(args);
}
window.gtag = gtag;
gtag("js", new Date());
gtag("config", "G-0S3DSJDG4H");

for (const src of [
  "https://www.googletagmanager.com/gtm.js?id=GTM-N72P33C2",
  "https://www.googletagmanager.com/gtag/js?id=G-0S3DSJDG4H",
]) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

export {};
