import { Driver } from "selenium-webdriver/edge";
import { Actions } from "selenium-webdriver";
import { Clicker } from "./miniPageObjects";

const clicker = new Clicker();

test("Click the cookie", async () => {
  await clicker.navigate();
  await clicker.click(clicker.englishBtn);
  await clicker.click(clicker.cookie);
  let value = await clicker.driver.getCurrentUrl();
  expect(value).toBe(clicker.url);
});

test("Click the options button", async () => {
  await clicker.click(clicker.optionBtn);
  let value = await clicker.driver.findElement(clicker.xBtn).isDisplayed;
  expect(value).toBeTruthy;
});

test("Click the info button", async () => {
  await clicker.click(clicker.infoBtn);
  let value = await clicker.driver.findElement(clicker.xBtn).isDisplayed;
  expect(value).toBeTruthy;
});

afterAll(async () => {
  await myClick.driver.quit();
});
