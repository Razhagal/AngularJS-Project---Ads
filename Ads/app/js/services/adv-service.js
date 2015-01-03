app.factory('adsService', function($resource, baseUrl) {
	var publicAdsResource = $resource(
			baseUrl + '/ads',
			null,
			{update: {
				method: 'PUT'
			}
		}),
		userAdsUrl = baseUrl + '/user/ads/:id',
		userAdsResource = $resource(
			userAdsUrl,
			{id:'@id'},
			{update: {
				method: 'PUT'
			}
		});

	function getAllAds(adsRequestParams) {
		return publicAdsResource.get(adsRequestParams);
	}

	function getUserAds(adsRequestParams) {
		return userAdsResource.get(adsRequestParams);
	}

	function createNewAd(ad) {
		return userAdsResource.save(ad);
	}

	function getAdById(id) {
		return userAdsResource.get({id:id});
	}

	function editAd(id, ad) {
		return userAdsResource.update({id:id}, ad);
	}

	function deleteAd(id) {
		return userAdsResource.delete({id:id});
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