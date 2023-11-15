const {test, expect}=require('@playwright/test')

//only
/*test.only('test1', async({page})=>{
    console.log('this is test1')
})*/

//skip
/*test.skip('test2', async({page})=>{
    console.log('this is test2')
})*/

/*test ('test3', async({page, browserName})=>{
    console.log('this is test3')
    if(browserName==='chromium')
    {
        test.skip()
    }
})*/

//Fixme
/*test('test4', async({page})=>{
    test.fixme()
    console.log('this is test 4')
})*/

//Fail
/*test('test5', async({page})=>{
    test.fail()//expected to fail
    console.log('this is test5')
    expect(1).toBe(1)//actual - passed. If both exp&actual is failed then test pass
})*/

//Slow
test('test6', async({page})=>{
    test.slow()
    await page.goto('https://www.demoblaze.com/index.html')
    console.log('this is test 6')
})