var app = angular.module('adsModule', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination'])
	.config(function($routeProvider) {
		var routePermissions = {
			'isLogged': function (authenticationService, notificationService, $location) {
					if (authenticationService.isLogged() == true) {
						return true;
					} else {
						notificationService.showInfo('Your are not authorized to visit this page. Please login first.');
						$location.path('/home');
					}
			}
		};

		$routeProvider.when('/home', {
			templateUrl: 'templates/main.html',
			controller: 'MainController'
		})
		.when('/login', {
			templateUrl: 'templates/login.html',
			controller: 'LoginController'
		})
		.when('/register', {
			templateUrl: 'templates/register.html',
			controller: 'RegisterController'
		})
		.when('/user/home', {
			templateUrl: 'templates/main.html',
			controller: 'MainController',
			resolve: routePermissions
		})
		.when('/user/ads', {
			templateUrl: 'templates/userAds.html',
			controller: 'UserController',
			resolve: routePermissions

		})
		.when('/user/ads/publish', {
			templateUrl: 'templates/publishAd.html',
			controller: 'PublishAdController',
			resolve: routePermissions
		})
		.when('/user/ads/edit/:id', {

			resolve: routePermissions
		})
		.when('/user/ads/delete/:id', {
			
			resolve: routePermissions
		})
		.otherwise({
			redirectTo: '/home'
		})
	})
	.constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api')
	.constant('pageSize', 3);