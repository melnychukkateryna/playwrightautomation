//const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'

test('Locators', async ({page})=>{

    await page.goto('https://demoblaze.com/');

    //click on login button - property
    //await page.locator('id=login2').click()
    await page.click('id=login2')

    //provide username - CSS
    //await page.locator('#loginusername').fill("pavanol")
    await page.fill('#loginusername', 'pavanol')
    //await page.type('#loginusername', 'pavanol')

    //provide password - CSS
    await page.fill("input[id='loginpassword']",'test@123')

    //Click on Login button
    await page.click("//button[text()='Log in']")

    //Verify logout link presence
    const logoutlink = await page.locator("//a[text()='Log out']")
    await expect(logoutlink).toBeVisible();

    //Close the page
    await page.close()

})