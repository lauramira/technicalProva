describe('Loading login page', function() {  

  beforeAll(function(){
    browser.get('http://localhost:8888/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Login Page');
  }); 

  it('should have a username element', function() {
    expect(browser.isElementPresent(by.name('username')));
  }); 
});