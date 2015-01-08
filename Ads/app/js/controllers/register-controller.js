app.controller('RegisterController', function($scope, Page, townsService) {
	Page.setPageName('Register');
	$scope.towns = townsService.getTowns();
});