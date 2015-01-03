var app = angular.module('adsModule', ['ngRoute', 'ngResource'])
	.config(function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'templates/main.html'
		})
		.when('/login', {
			templateUrl: 'templates/login.html'
		})
		.when('/register', {
			templateUrl: 'templates/register.html'
		})
		.otherwise({
			redirectTo: '/home'
		})
	});