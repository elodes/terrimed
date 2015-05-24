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

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/philosophy', {
        templateUrl: 'views/philosophy.html',
        controller: 'AboutCtrl'
      })
      .when('/adolescents', {
        templateUrl: 'views/adolescents.html',
        controller: 'AboutCtrl'
      })
      .when('/adults', {
        templateUrl: 'views/adults.html',
        controller: 'AboutCtrl'
      })
      .when('/children', {
        templateUrl: 'views/children.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/depression', {
        templateUrl: 'views/depression.html',
        controller: 'AboutCtrl'
      })
      .when('/grief', {
        templateUrl: 'views/grief.html',
        controller: 'AboutCtrl'
      })
      .when('/media', {
        templateUrl: 'views/media.html',
        controller: 'AboutCtrl'
      })
      .when('/payment', {
        templateUrl: 'views/payment.html',
        controller: 'AboutCtrl'
      })
      .when('/teens', {
        templateUrl: 'views/teens.html',
        controller: 'AboutCtrl'
      })
      .when('/videocounseling', {
        templateUrl: 'views/videocounseling.html',
        controller: 'AboutCtrl'
      })
      .when('/weight', {
        templateUrl: 'views/weight.html',
        controller: 'AboutCtrl'
      })
      .when('/forms', {
        templateUrl: 'views/forms.html',
        controller: 'AboutCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'AboutCtrl'
      })
      .when('/terri', {
        templateUrl: 'views/terri.html',
        controller: 'AboutCtrl'
      })
      .when('/submit', {
        templateUrl: 'views/submit.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

//Require the sweetcaptcha module and give it the credentials you were sent upon registration.
var sweetcaptcha = new require('sweetcaptcha')(appId, appKey, appSecret);

// The page that your contact form is on should have a route like this
app.get('/', function(req, res){

  //get sweetcaptcha html for the contact area
  sweetcaptcha.api('get_html', function(err,html){
    //Send the guts of the captcha to your template
    res.render('main', { captcha : html });
  });

});
