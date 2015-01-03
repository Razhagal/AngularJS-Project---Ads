app.controller('MainController', function($scope, $http, adsData) {
	$scope.pageName = 'Home';
	$scope.data = adsData.getAll();
});