app.controller('RegisterController', function($scope, pageService,
		townsService, authenticationService, notificationService) {
	pageService.setPageName('Register');
	$scope.towns = townsService.getTowns();
	$scope.userData = {};

	$scope.register = function(userData) {
		authenticationService.register(userData)
			.then(function(successData) {
				sessionStorage['currentUser'] = JSON.stringify(data);
				console.log(successData);
			}, function(error) {
				console.log(error);
			});
	}
});