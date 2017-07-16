app.controller('loginController', function($scope, $location) {
    $scope.username;
    $scope.password;


    $scope.submitForm = function(isValid) {
        $scope.submitted = true;
        if (isValid) {
            $location.path("/profile");
        }
    }
});