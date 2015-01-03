app.controller('MainController', function($scope, pageSize, Page,
	adsService,categoriesService, townsService) {
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

	$scope.data = adsService.getAll($scope.adsRequestParams);
	$scope.categories = categoriesService.getCategories();
	$scope.towns = townsService.getTowns();
});