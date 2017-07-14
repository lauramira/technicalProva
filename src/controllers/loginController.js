app.controller('loginController', function($scope, $location) {
    $scope.username= "John";
    $scope.password= "123456";

    $scope.dologin = function() {
        if ($scope.username !== "" && $scope.password !== "" && $scope.password.length > 6){
            $location.path("/profile");
        }
    };

});