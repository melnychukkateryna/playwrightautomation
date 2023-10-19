const { test, expect } = require('@playwright/test');

test("Handle dropdowns", async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Multiple ways to select option from the dropdown
    //await page.locator("#country").selectOption({lable:'Japan'}) //label/visible text
    //await page.locator("#country").selectOption('Japan') //visible text
    //await page.locator("#country").selectOption({value:'uk'}) //by using value
    //await page.locator("#country").selectOption({index:1}) //by using index
    await page.selectOption("#country",'Japan') //by text

    //Assertions
//1) check number of options in dropdown - approach1
    //const options=await page.locator('#country option')
    //await expect(options).toHaveCount(10)

//2) check number og options in dropdown - approach2
    //const options=await page.$$('#country option')
    //console.log("Number of options:", options.length)
    //await expect(options.length).toBe(10)

//3) check presence of value in the dropdown -approach1
    //const content=await page.locator('#country').textContent()
    //console.log("Text content is:", content)
    //await expect (content.includes('Japan')).toBeTruthy()

//4) check presence of value in the dropdown - approach2 - by using looping
    /*const options=await page.$$('#country option')
    let status=false
    for(const option of options)
    {
        //console.log(await option.textContent())
        let value=await option.textContent()
        if(value.includes('France'))
        {
            status=true
            break
        }
    }

    await expect(status).toBeTruthy()*/


//5) select option from dropdown by using loop
    const options=await page.$$('#country option')
    for(const option of options)
    {
        let value=await option.textContent()
        if(value.includes('France'))
        {
            await page.selectOption("#country", value)
            break
        }
    }

    await page.waitForTimeout(5000)

} )