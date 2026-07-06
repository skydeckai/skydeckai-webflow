import { expect, test } from "@playwright/test";
import { contactLink, dismissOverlays, followLink } from "../helpers/anchors";

test.describe("contact", () => {
  test("C6+C7: visitor reaches the contact page and contact channels are intact", async ({
    page,
  }) => {
    await page.goto("/");
    await dismissOverlays(page);

    const link = await contactLink(page); // C6 — throws with re-anchoring guidance
    const contact = await followLink(page, link);
    await contact.waitForLoadState("load");

    // Contact details are real text with actionable links (since the Astro
    // rebuild — the old anti-scrape images shipped white-on-transparent and
    // were unreadable on the new background; images passing a broken-image
    // check told us nothing about legibility).
    const mailto = contact.locator('a[href^="mailto:"]').first();
    await expect(
      mailto,
      "C7: expected a visible mailto: link on the contact page — a visitor must have a " +
        "clickable way to email the company.",
    ).toBeVisible();
    // Phone is deliberately plain text: GitHub Pages' deployment abuse-scanner
    // rejects artifacts containing tel: links on these pages (verified by
    // bisection, 2026-07-06). Do not "improve" this back to a tel: link while
    // the site is hosted on Pages.
    await expect(
      contact.getByText(/\d{3}[-.\s]\d{3}[-.\s]\d{4}/).first(),
      "C7: expected a visible phone number on the contact page.",
    ).toBeVisible();
    await expect(
      contact.getByText(/94104|market st/i).first(),
      "C7: expected the mailing address to be visible as text on the contact page.",
    ).toBeVisible();

    // And nothing on the page may be a broken image.
    const broken: string[] = [];
    for (const img of await contact.locator("img:visible").all()) {
      const ok = await img.evaluate(
        (el: HTMLImageElement) => el.complete && el.naturalWidth > 0,
      );
      if (!ok) broken.push((await img.getAttribute("src")) ?? "<no src>");
    }
    expect(
      broken,
      `C7: broken images on the contact page: ${broken.join(", ")}.`,
    ).toEqual([]);
  });

  test("C14: visitor can submit the contact form", async ({ page }) => {
    await page.goto("/en/about/skydeck-contact-us/");
    const form = page.locator("#contact-form");
    await expect(
      form,
      "C14: expected a contact form on the contact page.",
    ).toBeVisible();
    await form.locator('input[name="name"]').fill("Contract Check");
    await form.locator('input[name="email"]').fill("contracts@example.com");
    await form
      .locator('textarea[name="message"]')
      .fill("Automated contract verification — please ignore.");
    await form.locator('button[type="submit"]').click();
    // Two valid outcomes: the API accepted it (success note), or the endpoint
    // isn't reachable and the mailto fallback engaged (fallback note). Either
    // way the visitor's message has a path out — that's the contract.
    await expect(
      form
        .locator(".form-note.success:not([hidden]), .form-note.fallback:not([hidden])")
        .first(),
      "C14: submitting the form produced neither the success state nor the mailto " +
        "fallback — the visitor's message has no way out. Check the endpoint and " +
        "the form script.",
    ).toBeVisible({ timeout: 15_000 });
  });
});
