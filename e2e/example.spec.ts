import { test, expect } from '@playwright/test';

test('AsCar', async ({ page }) => {
  await page.goto('https://www.fatih-yavuz.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('AsCar', async ({ page }) => {
  await page.goto('https://www.fatih-yavuz.com/');
  // The new url should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('/about');
  // Find an element with the text 'About Page' and click on it
  await page.click('text=HAKKIMIZDA');

  // The new page should contain an h1 with "About Page"
  await expect(page.locator('div')).toContainText('HAKKIMIZDA Page');
});
