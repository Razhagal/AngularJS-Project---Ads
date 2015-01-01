var app = angular.module('adsModule', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'templates/loginSideBar.html'
		})
		.when('/login', {
			//login page
			//templateUrl:...,
			//controller:...
		})
		.when('/register', {
			//register page
		})
		.otherwise({
			redirectTo: '/home'
		})
	})