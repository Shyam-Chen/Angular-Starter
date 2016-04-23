describe('Hello World', function() {
  beforeEach(function() {
    browser.get('/');
    browser.waitForAngular();
    element(by.tagName('hello-world')).click();
  });
  it('should have a content', function() {
    var el = element(by.tagName('p'));
    expect(el.getText()).toEqual('Hello Angular 2');
  });
});
