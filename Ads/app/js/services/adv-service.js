app.factory('adsService', function($resource, $http, baseUrl, authenticationService) {
	$http.defaults.headers.common['Authorization'] = authenticationService.getHeaders().Authorization;
	var userAdsUrl = baseUrl + '/user/ads/:id',
		headers = authenticationService.getHeaders(),
		 publicAdsResource = $resource(
			baseUrl + '/ads',
			null,
			{update: {
				method: 'PUT'
			}
		}),
		userAdsResource = $resource(
			userAdsUrl,
			{
				id:'@id'
			},
			{update: {
				method: 'PUT'
			}
		});

	function getAllAds(adsRequestParams) {
		return publicAdsResource.get(adsRequestParams).$promise;
	}

	function getUserAds(adsRequestParams) {
		return userAdsResource.get(adsRequestParams).$promise;
	}

	function createNewAd(ad) {
		return userAdsResource.save(ad).$promise;
	}

	function getAdById(id) {
		return userAdsResource.get({id:id}).$promise;
	}

	function editAd(id, ad) {
		return userAdsResource.update({id:id}, ad).$promise;
	}

	function deleteAd(id) {
		return userAdsResource.delete({id:id}).$promise;
	}

	return {
		getAll: getAllAds,
		getUserAds: getUserAds,
		create: createNewAd,
		getById: getAdById,
		edit: editAd,
		delete: deleteAd
	}
});