import {
  Builder,
  By,
  Capabilities,
  until,
  WebDriver,
  WebElement,
} from "selenium-webdriver";
const chromedriver = require("chromedriver");

interface Options {
  driver?: WebDriver;
  url?: string;
}

export class BasePage {
  driver: WebDriver;
  url: string;

  constructor(options?: Options) {
    if (options && options.driver) this.driver = options.driver;
    else
      this.driver = new Builder()
        .withCapabilities(Capabilities.chrome())
        .build();
    if (options && options.url) this.url = options.url;
  }
  //* Lines 20-27 reflect else and if statements being used to further parameters being set for the testing */
  async navigate(url?: string): Promise<void> {
    if (url) return await this.driver.get(url);
    else if (this.url) return await this.driver.get(this.url);
    else
      return Promise.reject(
        "You need a url to visit the page please add one in the page objects or in your test"
      );
  }
  //* Lines 28-35 reflect a command to show a different message based on what parameters are fulfilled*//
  async getElement(elementBy: By): Promise<WebElement> {
    await this.driver.wait(until.elementLocated(elementBy));
    let element = await this.driver.findElement(elementBy);
    await this.driver.wait(until.elementIsVisible(element));
    return element;
  }
  //* Lines 38-43 uses the await operator is used to wait for a promise and get it's fulfillment value. Await operators can be used inside an async function */
  async click(elementBy: By): Promise<void> {
    return (await this.getElement(elementBy)).click();
  }

  async setInput(elementBy: By, keys: any): Promise<void> {
    let input = await this.getElement(elementBy);
    await input.clear();
    return input.sendKeys(keys);
  }

  async getText(elementBy: By): Promise<string> {
    return (await this.getElement(elementBy)).getText();
  }

  async getAttribute(elementBy: By, attribute: string) {
    return (await this.getElement(elementBy)).getAttribute(attribute);
  }
}
