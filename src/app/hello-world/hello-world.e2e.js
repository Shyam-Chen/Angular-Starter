describe('Hello World', function() {
  beforeEach(function() {
    browser.get('/');
    element(by.tagName('hello-world')).click();
  });
  it('should have a content', function() {
    var el = element(by.tagName('p'));
    expect(el.getText()).toEqual('Hello Angular 2');
  });
});
