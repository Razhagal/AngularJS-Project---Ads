app.factory('userService', function($resource, $http, baseUrl, authenticationService) {
	$http.defaults.headers.common['Authorization'] = authenticationService.getHeaders().Authorization;
	var userUrl = baseUrl + '/user',
		userResource = $resource(
			userUrl, null, {
			update: { method: 'PUT' },
			getProfile: { url: userAdsUrl + '/profile', method: 'GET' },
			edit: { url: userAdsUrl + '/profile', method: 'PUT' },
			changePassword: { url: userAdsUrl + '/changepassword', method: 'PUT' }
		});

	function getUserData() {
		return userResource.getProfile();
	}

	return {
		getUser: getUserData
	}
});