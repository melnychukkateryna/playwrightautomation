const {test,expect}=require('@playwright/test')

test("handle radio button", async ({page})=>{

    await page.goto('https://itera-qa.azurewebsites.net/home/automation')

    //Radio button
    await page.locator("//input[@value='option2']").check() 
    //await page.check("//input[@value='option2']")
    await expect (page.locator("//input[@value='option2']")).toBeChecked()
    await expect (page.locator("//input[@value='option2']").isChecked()).toBeTruthy()

    await expect (page.locator("//input[@value='option1']").isChecked()).toBeFalsy

    await page.waitForTimeout(5000) //pausing execution for 5000ms
})