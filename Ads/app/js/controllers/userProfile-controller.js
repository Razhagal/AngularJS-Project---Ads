app.controller('UserProfileController', function($scope, pageService, userService, townsService, notificationService) {
	pageService.setPageName('Edit User Profile');

	$scope.getProfileData = function() {
		userService.getUser()
			.then(function(successData) {
				$scope.userData = successData;
			}, function(error) {

			});
	}

	$scope.updateProfile = function(userData) {
		userService.editUser(userData)
			.then(function(successData) {
				notificationService.showSuccess('User profile successfully updated.')
			}, function(error) {
				notificationService.showError(error.data);
			});
	}

	$scope.getProfileData();
	$scope.towns = townsService.getTowns();
});