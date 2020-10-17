const puppeteer = require('puppeteer')

const getInfo = async () => {
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage()
    await page.goto('https://the-internet.herokuapp.com/login')

    await page.waitFor('input[name="username"]')

    //Require entries
    
    await page.type('input[name="username"]', 'tomsmith', {delay: 200})
    await page.type('input[name="password"]', 'SuperSecretPassword!', {delay: 200})

    await page.screenshot({path: 'loginScreenShot.png'})

    await page.keyboard.press('Enter')
    
}

getInfo()