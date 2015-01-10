app.controller('RegisterController', function($scope, $location, pageService,
		townsService, authenticationService, notificationService) {
	pageService.setPageName('Register');
	$scope.towns = townsService.getTowns();
	$scope.userData = {};

	$scope.register = function(userData) {
		if (userData.password == userData.confirmPassword) {
			authenticationService.register(userData)
				.then(function(successData) {
					sessionStorage['currentUser'] = JSON.stringify(successData);
					notificationService.showSuccess("Registered successfully!")
					$location.path('/home');
				}, function(error) {
					notificationService.showError("Failed to register", error.data);
				});
		} else {
			notificationService.showError('Passwords don\' match.');
		}
	}
});