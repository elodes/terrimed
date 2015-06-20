'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])


/**
 * Routes:
 */

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/philosophy', {
        templateUrl: 'views/philosophy.html',
        controller: 'MainCtrl'
      })
      .when('/adolescents', {
        templateUrl: 'views/adolescents.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl'
      })
      .when('/depression', {
        templateUrl: 'views/depression.html',
        controller: 'MainCtrl'
      })
      .when('/grief', {
        templateUrl: 'views/grief.html',
        controller: 'MainCtrl'
      })
      .when('/payment', {
        templateUrl: 'views/payment.html',
        controller: 'MainCtrl'
      })
      .when('/weight', {
        templateUrl: 'views/weight.html',
        controller: 'MainCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'MainCtrl'
      })
      .when('/6-5-15', {
        templateUrl: 'views/6-5-15.html',
        controller: 'MainCtrl'
      })
      .when('/terri', {
        templateUrl: 'views/terri.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
