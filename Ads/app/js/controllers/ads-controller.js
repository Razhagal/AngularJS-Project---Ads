app.controller('MainController', function($scope, pageSize, Page,
	adsService, categoriesService, townsService) {
	if ($scope.Page) {
		Page.setPageName('Home');
	} else {
		$scope.Page = Page;
		Page.setPageName('Home');
	}

	$scope.adsRequestParams = {
		startPage: 1,
		pageSize: pageSize
	}

	$scope.getAds = function(requestParams) {
		adsService.getAll(requestParams)
			.then(function(data) {
				$scope.adsData = data;
			});
	}

	$scope.getAds($scope.adsRequestParams);
	$scope.categories = categoriesService.getCategories();
	$scope.towns = townsService.getTowns();

	$scope.filterByCategory = function(categoryId) {
		$scope.adsRequestParams.categoryId = categoryId
		$scope.getAds($scope.adsRequestParams);
	}

	$scope.filterByTown = function(townId) {
		$scope.adsRequestParams.townId = townId;
		$scope.getAds($scope.adsRequestParams);
	}

	$scope.showPage = function() {
		$scope.getAds($scope.adsRequestParams);
	}
});