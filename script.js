//building routing module with dependency of ngRoute

var app = angular.module('theRoutes', ['ngRoute']);

//configuring routes
app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'catView.html',
			controller: 'routeController'
		});
	
	$routeProvider
		.when('/fancy', {
			templateUrl: 'fancyView.html',
			controller: 'routeController'
		});

	$routeProvider
		.when('/dog', {
			templateUrl: 'dogView.html',
			controller: 'routeController'
		});
	$routeProvider
		.when('/grandma', {
			templateUrl: 'cat2view.html',
			controller: 'routeController'
		});
	$routeProvider
		.when('/strongest', {
			templateUrl: 'cat3view.html',
			controller: 'routeController'
		})

		.otherwise({ redirectTo: '/' });

//part of what removes the hash from the code/url
	$locationProvider.html5Mode(true);
});

//building the controller
app.controller('routeController', function(){

});