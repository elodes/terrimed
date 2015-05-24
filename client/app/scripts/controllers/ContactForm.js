/**
 * Created by erinlodes on 5/23/15.
 */
'use strict';

angular.module('core').controller('ContactFormController', ['$scope', '$http', '$mdToast', '$animate',
  function($scope, $http, $mdToast, $animate) {
// Expose view variables

    $scope.toastPosition = {
      bottom: false,
      top: true,
      left: false,
      right: true
    };
    $scope.getToastPosition = function () {
      return Object.keys($scope.toastPosition)
        .filter(function (pos) {
          return $scope.toastPosition[pos];
        })
        .join(' ');
    };

    this.sendMail = function () {

      data = ({
        contactName : this.contactName,
        contactEmail : this.contactEmail,
        contactMsg : this.contactMsg
      });

      // Simple POST request example (passing data) :
      $http.post('/contact-form', data).
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available

          $mdToast.show(
            $mdToast.simple()
              .content('Thanks for your message ' + data.contactName + ' You Rock!')
              .position($scope.getToastPosition())
              .hideDelay(5000)
          );

        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

    };
  }
]);
