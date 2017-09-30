'use strict';

/**
 * @ngdoc overview
 * @name cerevezaApp
 * @description
 * # cerevezaApp
 *
 * Main module of the application.
 */
angular
  .module('cerevezaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .when('/reservation', {
        templateUrl: 'views/reservation.html',
        controller: 'ReservationCtrl',
        controllerAs: 'vm'
      })
      .when('/brewery', {
        templateUrl: 'views/brewery.html',
        controller: 'BreweryCtrl',
        controllerAs: 'vm'
      })
      .when('/brewer', {
        templateUrl: 'views/brewer.html',
        controller: 'BrewerCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
