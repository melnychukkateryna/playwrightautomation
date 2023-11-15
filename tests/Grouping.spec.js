import {test, expect} from '@playwright/test'

test.beforeAll(async()=>{
    console.log('This is beforeAll hook')
})

test.afterAll(async()=>{
    console.log('This is afterAll hook')
})

test.beforeEach(async()=>{
    console.log('This is beforeEach hook')
})

test.afterEach(async()=>{
    console.log('This is afterEach hook')
})

test.describe('Group1',()=>{
    test('Test1', async ({page})=>{
        console.log('This is my test 1')
    })
    
    test('Test2', async ({page})=>{
        console.log('This is my test 2')
    })

})

test.describe('Group2',()=>{
    test('Test3', async ({page})=>{
        console.log('This is my test 3')  
    })
    
    test('Test4', async ({page})=>{   
        console.log('This is my test 4')   
    })
})



