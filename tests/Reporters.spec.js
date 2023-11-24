const {test, expect} = require('@playwright/test');

test ('Test1', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
})

//List reporter - npx playwright test --reporter=list 
//OR change to reporter: 'list' in playwright.config.js

//Line reporter - npx playwright test --reporter=line

//Dot reporter - npx playwright test --reporter=dot

//HTML reporter - npx playwright test --reporter=html 

//JSON reporter - npx playwright test --reporter=json 

//JUnit reporter - npx playwright test --reporter=junit 

/* allure generate my-allure-results -o allure-report --clean
allure open allure-report*/