'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AboutCtrl', function ($scope) {
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
          $('b', this).toggleClass("caret caret-up");
        },
        function() {
          $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
          $(this).toggleClass('open');
          $('b', this).toggleClass("caret caret-up");
        });
    });

  });
