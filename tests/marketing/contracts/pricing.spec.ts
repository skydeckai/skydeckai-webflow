import { expect, test } from "@playwright/test";
import { dismissOverlays, followLink, pricingLink } from "../helpers/anchors";

test.describe("pricing", () => {
  test("C2+C3: visitor reaches pricing from the homepage and sees real prices", async ({
    page,
  }) => {
    await page.goto("/");
    await dismissOverlays(page);

    const link = await pricingLink(page); // C2 — throws with re-anchoring guidance
    const pricing = await followLink(page, link);

    const text = await pricing.locator("body").innerText();

    const amounts = new Set(text.match(/\$\s?\d+(?:\.\d{2})?/g) ?? []);
    expect(
      amounts.size,
      `C3: expected at least 3 distinct $-amounts on the pricing page (found: ${[...amounts].join(", ") || "none"}). ` +
        "If prices moved behind a toggle/tab in a redesign, re-anchor by revealing them here; " +
        "if the currency display changed (e.g. localized symbols), widen the pattern in this spec.",
    ).toBeGreaterThanOrEqual(3);

    expect(
      text,
      "C3: expected recurring-billing wording (monthly / per month / annual) near the prices — " +
        "visitors must be able to tell what the numbers mean.",
    ).toMatch(/monthly|per\s+month|\/\s?mo(nth)?|annual/i);
  });
});
