import {BasePage} from './basePage'
import {By} from 'selenium-webdriver'

export class Clicker extends BasePage {
    englishBtn: By = By.xpath('//div[@id="langSelect-EN"]')
    cookie: By = By.css('#bigCookie')
    legacyBtn: By = By.xpath('//div[text()="Legacy"]')
    ascendBtn: By = By.className('option smallFancybutton focused')
    reincarnateBtn: By = By.className('fancyText')
    yesBtn: By = By.xpath('//a[text()= "Yes"]')
    optionBtn: By = By.css('#prefsButton')
    infoBtn: By = By.css('#logButton')
    xBtn: By = By.css('.menuClose')

constructor() {
    super({url: 'https://orteil.dashnet.org/cookieclicker/'})
}

async repeatClick(num, clickThing){
    for (let i = 0; i < num; i++){
        await this.click(clickThing)
        
        }
    }
}

