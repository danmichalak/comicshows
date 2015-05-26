var comicSite = angular.module('comicSite', ['ui.router']);

comicSite.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		views: {
			"head": {
				template: "home header"
			},
			"nav": {
				//templateURL: "templates/nav.html"
				template: "home nav"
			},
			"body": {
				template: "home body"
			}
		}
	})
	.state('exhibitors', {
		url: '/exhibitors',
		views: {
			"head": {
				template: "exhibitors header"
			},
			"nav": {
				//templateURL: "templates/nav.html"
				template: "exhibitors nav"
			},
			"body": {
				template: "exhibitors body"
			}
		}
	})
	.state('join', {
		url: '/join',
		views: {
			"head": {
				template: "join header"
			},
			"nav": {
				//templateURL: "templates/nav.html"
				template: "join nav"
			},
			"body": {
				template: "join body"
			}
		}
	})
	.state('contact', {
		url: '/contact',
		views: {
			"head": {
				template: "contact header"
			},
			"nav": {
				//templateURL: "templates/nav.html"
				template: "contact nav"
			},
			"body": {
				template: "contact body"
			}
		}
	});
});