app.factory('authenticationService', function($resource, baseUrl){
	var registerUrl = baseUrl + '/user/register',
		loginUrl = baseUrl = '/user/login';

	var userRegistrationService =
		$resource(
			registerUrl,
			null,
			{update: {
				method: 'PUT'
			}
		});

	function registerUser(userData) {
		return userRegistrationService.save(userData).$promise;
	}

	return {
		register: registerUser
	}
});