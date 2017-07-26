app.controller('loginController', function($scope, $location) {
    $scope.username;
    $scope.password;


    $scope.doLogin = function() {
      $location.path("/home");
    }

    // $scope.$on('$locationChangeStart', function(event) {
    //    event.preventDefault();
    //    console.log("aaaaa");
   	// 	}
	// );
});