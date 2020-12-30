declare var global: any;

import { chromium } from 'playwright';

import { SITE_URL, FUNC_URL } from '../env';

jest.setTimeout(100 * 1000);

global.SITE_URL = SITE_URL;

global.mobileViewport = { width: 375, height: 667 };
global.desktopViewport = { width: 1366, height: 768 };

beforeAll(async () => {
  global.browser = await chromium.launch({
    headless: false,
    slowMo: 80,
    args: ['--no-sandbox'],
  });
});

afterAll(async () => {
  await global.browser.close();
});
