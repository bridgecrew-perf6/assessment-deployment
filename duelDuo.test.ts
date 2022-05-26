
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('draw button should add robots to select', async () => {
    await driver.findElement(By.id('draw')).click ()
    
    await driver.sleep(2000)

    const botCard = await driver.findElement(By.xpath("(//div/div[contains(@class, 'bot-card')])[1]"))

    const displayed = botCard.isDisplayed()

    expect(displayed).toBeTruthy
})