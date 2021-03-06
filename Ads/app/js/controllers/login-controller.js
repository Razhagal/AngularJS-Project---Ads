app.controller('LoginController', function($scope, $location, 
		pageService, authenticationService, notificationService) {
	pageService.setPageName('Login');
	$scope.userData = {};

	$scope.login = function(userData) {
		authenticationService.login(userData)
			.then(function(successData) {
				sessionStorage['currentUser'] = JSON.stringify(successData);
				notificationService.showSuccess("Logged in successfully!")
				$location.path('/user/home');
			}, function(error) {
				notificationService.showError("Failed to login", error.data);
			});
	}
});