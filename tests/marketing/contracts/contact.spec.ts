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

    const text = await contact.locator("body").innerText();
    const channels = ["email", "phone", "support"].filter((c) =>
      new RegExp(`\\b${c}\\b`, "i").test(text),
    );
    expect(
      channels.length,
      `C7: expected the contact page to list contact channels (Email/Phone/Support); found only: ${channels.join(", ") || "none"}. ` +
        "If the redesign replaced the channel list with a contact form, add the form contract " +
        "(see CONTRACTS.md 'Known product gaps') instead of weakening this one.",
    ).toBeGreaterThanOrEqual(2);

    // The actual email/phone values are rendered as images today — a regression
    // that breaks those images silently removes every way to contact the company.
    const broken: string[] = [];
    for (const img of await contact.locator("img:visible").all()) {
      const ok = await img.evaluate(
        (el: HTMLImageElement) => el.complete && el.naturalWidth > 0,
      );
      if (!ok) broken.push((await img.getAttribute("src")) ?? "<no src>");
    }
    expect(
      broken,
      `C7: broken images on the contact page (contact details are images today): ${broken.join(", ")}. ` +
        "If the redesign renders contact details as text instead, replace this image check " +
        "with a text/mailto assertion — the contract is 'contact details are visible and intact'.",
    ).toEqual([]);
  });
});
