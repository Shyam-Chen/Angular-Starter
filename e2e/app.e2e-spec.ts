import { browser, by, element } from 'protractor';

describe('App', () => {
  beforeEach(async  () => {
    return await browser.get('/');
  });

  it('should have a title', () => {
    const el = element(by.css('app-root h3'));
    expect(el.getText()).toEqual('MEAN Stack RESTful API');
  });

  it('should have an input', () => {
    const textInput = element(by.css('app-root #text'));
    expect(textInput.isPresent()).toEqual(true);
  });

  it('should have a button', () => {
    const addButton = element(by.css('app-root #add'));
    expect(addButton.isPresent()).toEqual(true);
  });

  // TODO: Mock
  // it('should add a item to the list', () => {
  //   const textInput = element(by.css('app-root #text'));
  //   textInput.sendKeys('MEAN Stack');
  //
  //   const addButton = element(by.css('app-root #add'));
  //   addButton.click();
  //
  //   const spanEl = element(by.css('app-root .list span'));
  //   expect(spanEl.getText()).toEqual('MEAN Stack');
  // });
});
