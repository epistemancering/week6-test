const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("clicking the Draw button displays the div with id = \"choices\"", async function() {
    await driver.get("http://localhost:8000")
    await driver.findElement(By.css("#draw")).click()
    await driver.wait(until.elementLocated(By.css("#choices *")))
  })
  test("clicking an \"Add to Duo\" button displays the div with id = \"player-duo\"", async function() {
    await driver.get("http://localhost:8000")
    await driver.findElement(By.css("#draw")).click()
    await driver.findElement(By.css(".bot-btn")).click()
    await driver.wait(until.elementLocated(By.css("#player-duo *")))
  })
});