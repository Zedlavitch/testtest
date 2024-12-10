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

  // Take a screenshot
  await page.screenshot({ path: 'saucedemo_logged_in_screenshot.png' });

  // Close the browser
  await browser.close();
})();
