'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $(function(){
      $(".dropdown").hover(
        function() {
          $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
          $(this).toggleClass('open');
          $('b', this).toggleClass;
        },
        function() {
          $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
          $(this).toggleClass('open');
          $('b', this).toggleClass;
        });
    });

    $scope.goto=function(path){
      $location.path(path);
    };





    // using SendGrid's Node.js Library - https://github.com/sendgrid/sendgrid-nodejs
    var sendgrid = require("sendgrid")(api_user, api_key);
    var email = new sendgrid.Email();

    email.addTo("test@sendgrid.com");
    email.setFrom("you@youremail.com");
    email.setSubject("Sending with SendGrid is Fun");
    email.setHtml("and easy to do anywhere, even with Node.js");

   sendgrid.send(email);

// google dynamic map needs


    //$scope.isActive = function (viewLocation) {
    //  var active = (viewLocation === $location.path());
    //  return active;
    //};
  });
