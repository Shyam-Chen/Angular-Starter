describe('Hello World', function() {
  beforeEach(function() {
    browser.get('http://localhost:9876/');
    element(by.css('hello-world')).click();
  });
  it('should have a content', function() {
    var el = element(by.css('hello-world p'));
    expect(el.getText()).toEqual('Hello Angular 2');
  });
});
