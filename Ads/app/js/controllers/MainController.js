app.controller('MainController', function($scope, $http, publicAdsService) {
	$scope.pageName = 'Home';
	$scope.data = publicAdsService.getAll();
});