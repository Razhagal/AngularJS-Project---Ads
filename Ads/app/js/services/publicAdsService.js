app.factory('publicAdsService', function($resource) {
	var resource = $resource(
		'http://softuni-ads.azurewebsites.net/api/ads',
		{id:'@id'},
		{update: {
			method: 'PUT'
		}
	});

	function getAllAds() {
		return resource.get();
	}

	return {
		getAll: getAllAds
	}
});