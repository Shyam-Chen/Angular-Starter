describe('HelloAngularComponent', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a content', () => {
    element(by.css('hello')).click();
    expect(element(by.css('hello p')).getText()).toEqual('Hello Angular 2');
  });

});
