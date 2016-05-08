describe('Hello World', function() {
  beforeEach(function() {
    browser.get('http://localhost:9876/');
  });
  it('should have a content', function() {
    expect(element(by.css('.title')).getText()).toEqual('Angular2TS Starter Kit');
  });
});
