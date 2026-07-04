import { expect, test } from "@playwright/test";
import { dismissOverlays, docsLink, followLink } from "../helpers/anchors";

test.describe("smoke", () => {
  test("C1: homepage loads with substantial content", async ({ page }) => {
    const response = await page.goto("/");
    expect(
      response?.status(),
      "C1: homepage must respond 200 — the site itself is down or misdeployed.",
    ).toBe(200);
    await dismissOverlays(page);
    const text = await page.locator("body").innerText();
    expect(
      text.length,
      "C1: homepage rendered almost no text — likely an error shell or broken deploy.",
    ).toBeGreaterThan(500);
    expect(
      text,
      "C1: homepage should mention the product (SkyDeck) somewhere in its content.",
    ).toMatch(/skydeck/i);
  });

  test("C8: documentation site is linked and reachable", async ({ page }) => {
    await page.goto("/");
    await dismissOverlays(page);
    // The docs link lives inside a dropdown menu in the current design, so it is
    // present but not visible — the contract is that the link EXISTS and its
    // destination WORKS, not that it is on-screen at load.
    const href = await docsLink(page).getAttribute("href");
    expect(
      href,
      "C8: found a documentation link element but it has no href.",
    ).toBeTruthy();
    const response = await page.request.get(href!);
    expect(
      response.ok(),
      `C8: documentation link points at ${href}, which responded ${response.status()} — docs are unreachable from the marketing site.`,
    ).toBe(true);
    expect(
      (await response.text()).length,
      `C8: ${href} responded OK but with an empty body.`,
    ).toBeGreaterThan(200);
  });
});
