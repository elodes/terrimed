'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope) {
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

    //$scope.isActive = function (viewLocation) {
    //  var active = (viewLocation === $location.path());
    //  return active;
    //};
  });
