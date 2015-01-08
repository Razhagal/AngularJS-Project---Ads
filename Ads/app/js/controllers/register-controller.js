app.controller('RegisterController', function($scope, Page, townsService, authenticationService) {
	Page.setPageName('Register');
	$scope.towns = townsService.getTowns();
	$scope.userData = {};

	$scope.register = function(userData) {
		authenticationService.register(userData)
			.then(function(successData) {
				console.log(successData);
			}, function(error) {
				console.log(error);
			});
	}

	//{"message":"The request is invalid.","modelState":{"model.Password":["The Password field is required."],"model.ConfirmPassword":["The Confirm password field is required."]}}
});