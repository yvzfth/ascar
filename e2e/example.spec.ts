import { test, expect } from '@playwright/test';

test('Ascar', async ({ page }) => {
  await page.goto('https://www.fatih-yavuz.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('Ascar', async ({ page }) => {
  await page.goto('https://www.fatih-yavuz.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'HAKKIMIZDA' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*about/);
});
