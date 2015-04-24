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

    //$scope.isActive = function (viewLocation) {
    //  var active = (viewLocation === $location.path());
    //  return active;
    //};
  });
