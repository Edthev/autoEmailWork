import {chromium,test} from '@playwright/test';
require("dotenv").config()

const VARIABLE : string | undefined = process.env.VARIABLE;

if (!VARIABLE){
  throw new Error("Error with Enviornmental Variables")
}

test("test",async () => {
  // connect to browser
  const browser = await chromium.connectOverCDP("http://localhost:9222")
  // init browser and page
  const context = browser.contexts()[0] || await browser.newContext();
  const page = await context.newPage();

  // go to page
  await page.goto("https://www.google.com/");
})
