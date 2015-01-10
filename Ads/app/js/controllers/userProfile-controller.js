app.controller('UserProfileController', function($scope, pageService, userService, townsService, notificationService) {
	pageService.setPageName('Edit User Profile');

	$scope.getProfileData() {
		userService.getUser()
			.then(function(successData) {
				$scope.userData = successData;
			}, function(error) {

			});
	}

	$scope.towns = townsService.getTowns();
});