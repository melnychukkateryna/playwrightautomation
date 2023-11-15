import {test, expect} from '@playwright/test' 
//playwrite config: screenshot: 'on'/'only-on-failure'...
//video:'retain-on-failure'/'retry-with-video'/'on-first-retry'/'on'/'off'

test('Page screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'})
});

test('Full page screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'FullPage.png',fullPage:true})
});

test('Element screenshot', async({page})=>{
    await page.goto('https://demo.opencart.com/')
    await page.locator('//*[@id="content"]/div[2]/div[1]/from/div').screenshot({path:'tests/screenshots/'+Date.now()+'Macbook.png'})
});



