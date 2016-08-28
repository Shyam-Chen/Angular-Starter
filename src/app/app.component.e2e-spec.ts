describe('AppComponent', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a content', () => {
    expect(element(by.css('app > h3')).getText()).toEqual('Angular2TS Starter Kit');
  });

});
