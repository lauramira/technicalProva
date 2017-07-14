exports.config = {  
    seleniumAddress: 'http://localhost:4444/wd/hub',  
    specs: ['test/*.spec.js'],  
    baseURL: 'http://localhost:8080/',  
    framework: 'jasmine',  
};