app.controller('DeleteAdController', function($scope, $routeParams, pageService,
		adsService, notificationService) {
	pageService.setPageName('Delete Ad');

	$scope.getAdData = function(adId) {
		adsService.getById(adId)
			.then(function(successData) {
				$scope.adData = successData;
			}, function(error) {
				notificationService.showError(error.data);
			});
	}

	$scope.delete = function() {
		adsService.delete($routeParams.id)
			.then(function(successData) {
				notificationService.showSuccess('Advertisement deleted.');
			}, function(error) {
				notificationService.showError(error.data);
			});
	}


	$scope.getAdData($routeParams.id);
});