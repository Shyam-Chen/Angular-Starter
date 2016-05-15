describe('HelloAngularComponent', function() {
  beforeEach(function() {
    browser.get('/');
  });
  it('should have a content', function() {
    element(by.css('hello-angular')).click();
    expect(element(by.css('hello-angular p')).getText()).toEqual('Hello Angular');
  });
});
