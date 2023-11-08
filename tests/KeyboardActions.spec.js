const {test, expect} = require('@playwright/test')

test('Keyboard actions', async ({page})=>{

    await page.goto('https://gotranscript.com/text-compare')

    //await page.locator('name="text1"').fill("welcome to automation")
    await page.type('[name="text1"]',"welcome to automation")

    //Ctrl + A
    await page.keyboard.press('Control+A') // in case of multiple keys combination

    //Ctrl + C
    await page.keyboard.press('Control+C')

    //Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //Ctrl + V
    await page.keyboard.press('Control+V')


    await page.waitForTimeout(5000)

} )

