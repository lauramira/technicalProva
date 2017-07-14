app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "src/html/login.html"
    })
    .when("/profile", {
        templateUrl : "src/html/profile.html"
    })
});