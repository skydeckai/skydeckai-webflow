import { defineConfig, devices } from "@playwright/test";

/**
 * BASE_URL selects the deployment under test:
 *   production (default): https://www.skydeck.ai
 *   a preview/staging deploy: BASE_URL=https://<preview-host> npx playwright test
 * The same contracts must pass on any deployment — that's the point.
 */
export default defineConfig({
  testDir: "./contracts",
  timeout: 45_000,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: process.env.BASE_URL ?? "https://www.skydeck.ai",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    ...devices["Desktop Chrome"],
  },
});
