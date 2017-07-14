app.controller('loginController', function($scope, $location) {
    $scope.username;
    $scope.password;

    $scope.dologin = function() {
        if ($scope.username && $scope.password && $scope.password.length > 6){
            $location.path("/profile");
        }
    };

});