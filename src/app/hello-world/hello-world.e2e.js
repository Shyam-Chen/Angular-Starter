describe('Hello World', function() {
  beforeEach(function() {
    browser.get('http://localhost:9876/');
    browser.ignoreSynchronization = true;
    element(by.css('hello-world')).click();
    browser.ignoreSynchronization = false;
  });
  it('should have a content', function() {
    var el = element(by.css('hello-world p'));
    expect(el.getText()).toEqual('Hello Angular 2');
  });
});
