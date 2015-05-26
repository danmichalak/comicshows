var comicSite = angular.module('comicSite', ['ui.router']);

comicSite.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		views: {
			"header": {
				template: "home header"
			},
			"container": {
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
			"header": {
				template: "exhibitors header"
			},
			"container": {
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
			"header": {
				template: "join header"
			},
			"container": {
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
			"header": {
				template: "contact header"
			},
			"container": {
				template: "contact nav"
			},
			"body": {
				template: "contact body"
			}
		}
	});
});