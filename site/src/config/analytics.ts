/**
 * Analytics stack (decision 2026-07-06): GTM + GA4 stay, PostHog added
 * alongside, Hotjar stays blocked by the CSP (script-src has no hotjar origin —
 * reinstating it would take a deliberate CSP change here in code).
 *
 * Set `key` to the PostHog project API key (phc_…) to activate PostHog; an
 * empty key loads nothing. Hosts: US cloud shown. EU cloud →
 * https://eu.i.posthog.com / https://eu-assets.i.posthog.com. Self-hosted →
 * your instance for both. Base.astro builds the CSP from these values.
 */
export const POSTHOG = {
  key: "",
  apiHost: "https://us.i.posthog.com",
  assetsHost: "https://us-assets.i.posthog.com",
};

export const GTM_ID = "GTM-N72P33C2";
export const GA4_ID = "G-0S3DSJDG4H";
