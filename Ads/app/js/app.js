var app = angular.module('adsModule', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination'])
	.config(function($routeProvider) {
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
		.otherwise({
			redirectTo: '/home'
		})
	})
	.constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api')
	.constant('pageSize', 3);