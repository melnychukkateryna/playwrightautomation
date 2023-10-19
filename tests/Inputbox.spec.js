const {test,expect}=require('@playwright/test')

test("handle inputbox", async ({page})=>{

    await page.goto('https://itera-qa.azurewebsites.net/home/automation')

    //Inputbox - firstname
    await expect(page.locator("//input[@id='name']")).toBeVisible()
    await expect(page.locator("//input[@id='name']")).toBeEmpty()
    await expect(page.locator("//input[@id='name']")).toBeEditable()
    await expect(page.locator("//input[@id='name']")).toBeEnabled()

    await page.locator("//input[@id='name']").fill("John")
    //await page.fill("//input[@id='name']", 'John')

    await page.waitForTimeout(5000) //pausing execution for 5000ms
})