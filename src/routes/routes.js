app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "src/html/login.html"
    })
    .when("/home", {
        templateUrl : "src/html/search.html"
    })
    .when("/register", {
        templateUrl : "src/html/register.html"
    })
});