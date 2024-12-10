const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: true }); // Set headless: false for debugging
  const page = await browser.newPage();

  // Navigate to the SauceDemo website
  await page.goto('https://www.saucedemo.com/');

  // Wait for the username and password fields to load
  await page.waitForSelector('#user-name');
  await page.waitForSelector('#password');

  // Type in the login credentials (You can replace these with valid credentials)
  await page.type('#user-name', 'standard_user'); // Use your SauceDemo username
  await page.type('#password', 'secret_sauce');   // Use your SauceDemo password

  // Click the login button
  await page.click('#login-button');

  // Wait for the page to load after logging in (e.g., wait for an element that's only present after login)
  await page.waitForSelector('.inventory_list'); // This selector indicates the page has loaded after login

  const firstProductSelector = '.inventory_item:first-of-type .btn_inventory';
  await page.waitForSelector(firstProductSelector);
  await page.click(firstProductSelector);

  // Click on the shopping cart icon in the navbar
  await page.click('.shopping_cart_link'); // This is the selector for the cart icon

  // Wait for the cart page to load (look for an element that indicates the cart page is loaded)
  await page.waitForSelector('.cart_list'); // This selector is present when the cart page loads

  // Take a screenshot of the cart page
  await page.screenshot({ path: 'saucedemo_cart_screenshot.png' });

  // Close the browser
  await browser.close();
})();
