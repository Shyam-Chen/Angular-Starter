import { browser, by, element } from 'protractor';

describe('Counter', () => {
  beforeEach(async () => {
    return await browser.get('/counter');
  });

  it('nice', async () => {
    const text = await element(by.css('app-counter')).getText();
    expect(text).toMatch('Clicked: 0 times, value is even.');
  });
});
