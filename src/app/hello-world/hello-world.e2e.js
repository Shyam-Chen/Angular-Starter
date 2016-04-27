describe('Hello World', function() {
  beforeEach(function() {
    browser.get('http://localhost:9876/');
  });
  it('should have a content', function() {
    element(by.css('hello-world')).click();
    var el = element(by.css('hello-world p'));
    expect(el.getText()).toEqual('Hello Angular 2');
  });
});
