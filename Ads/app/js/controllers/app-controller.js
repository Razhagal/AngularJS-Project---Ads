app.controller('AppController', function($scope, $location, pageService,
		authenticationService, notificationService) {
	pageService.setPageName('Home');
	$scope.pageService = pageService;
	$scope.authService = authenticationService;

	$scope.logout = function() {
		authenticationService.logout();
		notificationService.showSuccess("Logout successful.");
        $location.path('/');
	}
});