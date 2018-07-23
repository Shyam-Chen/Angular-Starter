declare var global: any;

import * as puppeteer from 'puppeteer';

describe('HelloWorld', () => {
  let [page, browser] = [null, null];

  beforeAll(async () => {
    browser = await puppeteer.launch(global.launch);
    page = await browser.newPage();
    await page.setViewport(global.viewport);
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    await page.goto(`${global.SITE_URL}/hello-world`);
  });

  it('should display a text', async () => {
    const selector = 'hello-world > div';
    const text = await page.$eval(selector, el => el.textContent);
    expect(text).toMatch('Hello, World!');
  });
});
