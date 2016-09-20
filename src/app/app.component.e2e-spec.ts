import { protractor } from 'protractor/globals';

declare let describe: any;
declare let beforeEach: any;
declare let it: any;
declare let expect: any;
declare let element: any;
declare let by: any;

describe('AppComponent', () => {

  beforeEach(() => {
    protractor.browser.get('/');
  });

  it('should have a content', () => {
    expect(element(by.css('app h3')).getText()).toEqual('Angular2TS Starter Kit');
  });

});
