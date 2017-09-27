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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
