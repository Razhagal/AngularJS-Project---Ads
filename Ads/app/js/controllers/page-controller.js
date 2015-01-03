app.controller('PageController', function($scope, pageSize, Page) {
	if (!$scope.Page) {
		$scope.Page = Page;
	}

	Page.setPageName('Home');
});