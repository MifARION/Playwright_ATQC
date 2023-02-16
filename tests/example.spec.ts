import { test, expect } from '@playwright/test';




const login = ''
const password = ''


test('test', async ({ page }) => {
  await page.goto('https://dabo-dev.dab-dabo-dev.galileo.teck.com/evo/dab');
  await page.getByPlaceholder('Email, phone, or Skype').click();
  await page.getByPlaceholder('Email, phone, or Skype').fill(login);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('button', { name: 'Yes' }).click();
  await page.goto('https://dabo-dev.dab-dabo-dev.galileo.teck.com/evo/dab', { waitUntil: 'networkidle' });
  await page.locator('.mat-form-field-infix > .mat-tooltip-trigger').click();
  await page.getByRole('button', { name: 'toggle BRIDGE1' }).click();
  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.getByRole('region', { name: 'Map' }).click({
    position: {
      x: 393,
      y: 199
    }
  });

});