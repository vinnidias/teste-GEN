const puppeteer = require('puppeteer')

const runTest = async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto('https://the-internet.herokuapp.com/login')

    //Require entries
    await page.waitFor('input[name="username"]')
    
    await page.type('input[name="username"]', 'tomsmith', {delay: 100})
    await page.type('input[name="password"]', 'SuperSecretPassword!', {delay: 100})
    
    await page.screenshot({path: 'login-screenShot.png'})

    await page.keyboard.press('Enter')

    //Page Secure Area
    await page.waitFor('.example > a')
    await page.screenshot({path: 'secure-area-screenshot.png'})

    //chromium is overlapping the component and the bot clicks the fork
    await page.waitFor('#flash-messages > #flash > a')
    await page.click('#flash-messages > #flash > a')
    await page.screenshot({path: 'wrong-bot-click.png'})

    await page.goBack()

    await page.click('.example > a')

    //The same overlap problem 
    await page.waitFor('#flash-messages > #flash > a')
    await page.click('#flash-messages > #flash > a')

    await page.goBack()

    //invalid username message 
    await page.waitFor('.radius')
    await page.type('input[name="username"]', 'wrongName', {delay: 100})
    await page.type('input[name="password"]', 'wrongpassword', {delay: 100})
    await page.click('.radius')

    await page.waitFor('#flash > a')

    await page.screenshot({path: 'ivalid-username-message.png'})

    //The same overlap problem
    await page.click('#flash > a')
    await page.goBack()

    // navigation for github
    await page.waitFor('.row > a')
    await page.click('.row > a')
    await page.screenshot({path: 'github-navigation.png'})

    await page.goBack()
    
    // footer link blank
    await page.waitFor('#page-footer > .large-4 > div > a')
    await page.click('#page-footer > .large-4 > div > a')

    await browser.close()
}

runTest()