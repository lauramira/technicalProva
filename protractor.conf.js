let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {  
    seleniumAddress: 'http://localhost:4444/wd/hub',  
    specs: ['test/*.spec.js'],  
    baseURL: 'http://localhost:8080/',  
    framework: 'jasmine',
    onPrepare: function () {
	    jasmine.getEnv().addReporter(new SpecReporter({
	      spec: {
	        displayStacktrace: true
	      }
	    }));
	  }
};