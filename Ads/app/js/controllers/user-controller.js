app.controller('UserController', function($scope, $location, pageSize, pageService,
	adsService, authenticationService, notificationService) {
	pageService.setPageName('My Ads');

	$scope.adsRequestParams = {
		startPage: 1,
		pageSize: pageSize
	}

	$scope.getAds = function(requestParams) {
		adsService.getUserAds(requestParams)
			.then(function(data) {
				$scope.adsData = data;
			});
	}

	$scope.getAds($scope.adsRequestParams);
});