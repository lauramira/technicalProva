app.controller('searchController', function($scope, $location, $http) {

	$scope.searchQuery = "";
	$scope.searchResults = [];

    $scope.doSearch = function() {
    	$http.get('http://api.tvmaze.com/search/shows?q=big')
      		.then(function(response) {
           		$scope.searchResults = response.data;
        	});
    }
});