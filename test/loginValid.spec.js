describe('Login valid', function() {  

  beforeAll(function(){
    browser.get('http://localhost:8888/');
  });

  it('should go to the profile page', function() {
   
    element(by.model('username')).sendKeys('username');
    element(by.model('password')).sendKeys('username');

    element(by.css('[type=submit]')).click();
   
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8888/#!/profile");
  });
});