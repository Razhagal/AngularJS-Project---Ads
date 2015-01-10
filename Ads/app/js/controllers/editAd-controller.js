app.controller('EditAdController', function($scope, $routeParams, pageService, adsService,
		categoriesService, townsService, notificationService) {
	pageService.setPageName('Edit Ad');

	$scope.getAdData = function(adId) {
		adsService.getById(adId)
			.then(function(successData) {
				$scope.adData = successData;
			}, function(error) {
				notificationService.showError(error.data);
			});
	}

	$scope.edit = function(adData) {
		adsService.edit($routeParams.id, adData)
			.then(function(successData) {
				notificationService.showSuccess('Advertisement edited. Don\' forget to submit it for publishing.');
			}, function(error) {
				notificationService.showError(error.data);
			});
	}


	$scope.getAdData($routeParams.id);
	$scope.categories = categoriesService.getCategories();
	$scope.towns = townsService.getTowns();
});