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

  // Type in the login credentials
  await page.type('#user-name', 'standard_user'); // Use your SauceDemo username
  await page.type('#password', 'secret_sauce');   // Use your SauceDemo password

  // Click the login button
  await page.click('#login-button');

  // Wait for the page to load after logging in
  await page.waitForSelector('.inventory_list'); // This selector indicates the inventory page has loaded

  console.log('Logged in and inventory page loaded');

  // Select the first product and navigate to its detail page
  const firstProductSelector = '.inventory_item:first-of-type a';
  await page.waitForSelector(firstProductSelector);
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
    page.click(firstProductSelector),
  ]);

  console.log('Navigated to the first product detail page');

  // Take a screenshot of the product detail page
  await page.screenshot({ path: 'product_detail.png' });
  console.log('Screenshot of the product detail page taken');

  // Close the browser
  await browser.close();
})();

