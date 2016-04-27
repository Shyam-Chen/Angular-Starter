describe('Hello World', function() {
  beforeEach(function() {
    browser.get('http://localhost:9876/');
    /*
    browser.wait(function() {
      return browser.executeScript('return !!window.angular');
    }, 5000);
    */
    element(by.tagName('hello-world')).click();
  });
  it('should have a content', function() {
    var el = element(by.tagName('p'));
    expect(el.getText()).toEqual('Hello Angular 2');
  });
});
