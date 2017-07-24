app.controller('loginController', function($scope, $location) {
    $scope.username;
    $scope.password;


    $scope.doLogin = function() {
    	console.log("bbbbb");
    	$location.path("/profile");
    }

    $scope.$on('$locationChangeStart', function(event) {
       event.preventDefault();
       console.log("aaaaa");
   		}
	);
});