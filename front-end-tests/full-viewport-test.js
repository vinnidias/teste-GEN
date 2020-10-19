const puppeteer = require('puppeteer')

const runTest = async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.setViewport({
        width: 1380,
        height: 1080
    })
    await page.goto('https://the-internet.herokuapp.com/login')


    //Require entries for Api
    await page.waitFor('input[name="username"]')
    await page.type('input[name="username"]', 'tomsmith', { delay: 100 })
    await page.type('input[name="password"]', 'SuperSecretPassword!', { delay: 100 })
    await page.screenshot({ path: 'fullScreen-login-screenShot.png' })
    await page.keyboard.press('Enter')

    // Close secure area alert div 
    await page.waitFor('#flash-messages > #flash > a')
    await page.screenshot({ path: 'fullScreen-alert-screenShot.png' })
    await page.click('#flash-messages > #flash > a')
    await page.waitFor('.row')
    await page.screenshot({ path: 'fullScreen-closeAlert-screenShot.png' })


    // Github secure area link
    await page.waitFor('.row > a')
    await page.click('.row > a')
    await page.screenshot({ path: 'fullScreen-github-screenShot.png' })
    await page.goBack()

    // Secure Area footer link
    await page.waitFor('#page-footer > .large-4 > div > a')
    await page.click('#page-footer > .large-4 > div > a')

    // Logout button
    await page.waitFor('.example > a')
    await page.click('.example > a')

    // Close logged out alert div 
    await page.waitFor('#flash-messages > #flash > a')
    await page.screenshot({ path: 'fullScreen-alert-screenShot.png' })
    await page.click('#flash-messages > #flash > a')
    await page.waitFor('.row')
    await page.screenshot({ path: 'fullScreen-close-alert-screenShot.png' })

    // Invalid username message 
    await page.waitFor('.radius')
    await page.type('input[name="username"]', 'wrongName', { delay: 100 })
    await page.type('input[name="password"]', 'wrongpassword', { delay: 100 })
    await page.click('.radius')

    // Close invalid message alert
    await page.waitFor('#flash-messages > #flash > a')
    await page.screenshot({ path: 'fullScreen-invalid-alert-screenShot.png' })
    await page.click('#flash-messages > #flash > a')
    await page.waitFor('.row')
    await page.screenshot({ path: 'fullScreen-close-invalid-alert-screenShot.png' })

    // Github link
    await page.waitFor('.row > a')
    await page.click('.row > a')
    await page.screenshot({ path: 'fullScreen-github-screenShot.png' })
    await page.goBack()

    // Login footer link
    await page.waitFor('#page-footer > .large-4 > div > a')
    await page.click('#page-footer > .large-4 > div > a')
    
    
    await browser.close()

}

runTest()