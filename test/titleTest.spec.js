describe('Protractor Test', function() {   
it('should have a title', function() {
    browser.get('http://localhost:8888/');
    expect(browser.getTitle()).toEqual('Login Page');
  }); 
});