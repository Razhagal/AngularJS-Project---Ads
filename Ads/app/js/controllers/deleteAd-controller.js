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

	$scope.edit = function(adData) {
		adsService.edit($routeParams.id, adData)
			.then(function(successData) {
				notificationService.showSuccess('Advertisement edited. Don\' forget to submit it for publishing.');
			}, function(error) {
				notificationService.showError(error.data);
			});
	}


	$scope.getAdData($routeParams.id);
});