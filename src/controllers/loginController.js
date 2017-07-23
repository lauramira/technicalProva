app.controller('loginController', function($scope, $location) {
    $scope.username;
    $scope.password;


    $scope.doLogin = function() {
        $location.path("/home");
    }
});