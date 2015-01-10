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
				$scope.userAdsData = data;
			});
	}
	
	$scope.showPage = function() {
		$scope.getAds($scope.adsRequestParams);
	}

	$scope.filterByStatus = function(status) {
		$scope.adsRequestParams.status = status;
		$scope.getAds($scope.adsRequestParams);
	}

	$scope.deactivateAd = function(adId) {
		adsService.deactivate(adId)
			.then(function(successData) {
				notificationService.showError(successData);
			}, function(error) {
				notificationService.showError(error.data);
			})
	}

	$scope.getAds($scope.adsRequestParams);	
});