const { test, expect } = require('@playwright/test');

test.describe('SauceDemo UI Tests', () => {

  test('Login Test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    
    await page.click('#login-button');
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('Form Submission - Add to Cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    
    await page.click('text=Add to cart', { hasText: 'Sauce Labs Backpack' });
    
    await page.click('.shopping_cart_link');
    
    await expect(page.locator('.cart_item')).toContainText('Sauce Labs Backpack');
  });

  test('Navigation Test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    
    await page.click('text=Sauce Labs Bolt T-Shirt');
    
    await expect(page).toHaveURL(/inventory-item.html/);
    await expect(page.locator('.inventory_details_name')).toHaveText('Sauce Labs Bolt T-Shirt');
  });

});