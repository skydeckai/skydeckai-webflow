import { test } from "@playwright/test";
import {
  dismissOverlays,
  expectAuthForm,
  followLink,
  signInLink,
  signUpLink,
} from "../helpers/anchors";

test.describe("auth entry points", () => {
  test("C4: visitor reaches a working sign-up form from the homepage", async ({
    page,
  }) => {
    await page.goto("/");
    await dismissOverlays(page);
    const link = await signUpLink(page);
    const dest = await followLink(page, link);
    await expectAuthForm(dest, "C4");
  });

  test("C5: visitor reaches a working sign-in form from the homepage", async ({
    page,
  }) => {
    await page.goto("/");
    await dismissOverlays(page);
    const link = await signInLink(page);
    const dest = await followLink(page, link);
    await expectAuthForm(dest, "C5");
  });
});
