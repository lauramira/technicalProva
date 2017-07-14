describe('Protractor Demo App', function() {
  it('should appear a password error', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('username')).sendKeys("Bob");
    element(by.model('password')).sendKeys("1234");

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).
        toEqual('5');
  });
});