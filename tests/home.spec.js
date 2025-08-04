//@ts-check
import { test, expect } from "@playwright/test";
test("Load home page", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page).toHaveTitle("Jethreefy");
});
test("Goto about page", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  const getStarted = page.getByRole("link", { name: "About" });
  await getStarted.click();
  await expect(page).toHaveURL("http://localhost:5173/#/about");
});
