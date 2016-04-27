describe('Hello World', function() {
  beforeEach(function() {
    browser.get('http://localhost:9876/');
    browser.ignoreSynchronization = false;
  });
  it('should have a content', function() {
    element(by.css('hello-world')).click();
    expect(element(by.css('hello-world p')).getText()).toEqual('Hello Angular 2');
  });
});
