describe('Home', function() {
  beforeEach(function() {
    browser.get('/');
    browser.waitForAngular();
    element(by.css('click-me')).click();
  });
  it('should have a content', function() {
    var el = element(by.css('click-me p'));
    expect(el.getText()).toEqual('Hello Angular 2');
  });
});
