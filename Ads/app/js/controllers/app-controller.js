app.controller('AppController', function($scope, pageService,
		authenticationService, notificationService) {
	$scope.pageService = pageService;
	$scope.authService = authenticationService;

	pageService.setPageName('Home');
});