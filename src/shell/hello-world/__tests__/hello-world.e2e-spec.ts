declare var global: any;

describe('HelloWorld', () => {
  let [context, page] = [null, null];

  beforeAll(async () => {
    context = await global.browser.newContext();
    page = await context.newPage();
    await page.setViewportSize(global.desktopViewport);
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
