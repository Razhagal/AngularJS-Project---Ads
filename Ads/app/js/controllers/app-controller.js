app.controller('AppController', function($scope, pageService) {
	$scope.pageService = pageService;
	
	pageService.setPageName('Home');
});