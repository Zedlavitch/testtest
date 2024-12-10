const {Builder, By, Key, until} = require('selenium-webdriver');

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to inserted address
        await driver.get('https://www.bing.com');

        // Enter text in search bar
        await driver.findElement(By.name('q')).sendKeys('Franz Ferdinard', Key.ENTER);

        // first search result logged
        let firstResult = await driver.wait(until.elementLocated(By.css('h2 a')), 10000);

        console.log(await firstResult.getAttribute('textContent'));
    }
    finally {
        // Quit the browser after the test
        await driver.quit();
    }
}

example();
