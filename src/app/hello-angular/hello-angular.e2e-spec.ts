describe('HelloAngularComponent', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a content', () => {
    element(by.css('hello-angular')).click();
    expect(element(by.css('hello-angular p')).getText()).toEqual('Hello Angular');
  });

});
