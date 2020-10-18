const puppeteer = require('puppeteer')

const getInfo = async () => {
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage()
    await page.goto('https://the-internet.herokuapp.com/login')

    await page.waitFor('input[name="username"]')

    //Require entries
    
    await page.type('input[name="username"]', 'tomsmith', {delay: 100})
    await page.type('input[name="password"]', 'SuperSecretPassword!', {delay: 100})
    
    await page.screenshot({path: 'login-screenShot.png'})

    await page.keyboard.press('Enter')

    //Page Secure Area

    await page.waitFor('.example > a')
    await page.screenshot({path: 'secure-area-screenshot.png'})
    await page.click('.example > a')

    await browser.close()
    
}

getInfo()