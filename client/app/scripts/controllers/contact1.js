'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ContactCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.submitEmail = function() {

      console.log("TEST");
      //Request
      $http.post('/email', $scope.email)
        .success(function(data, status) {
          console.log("Sent ok");
        })
        .error(function(data, status) {
          console.log("Error");
        })
    };
  });

//  var checkJsVar = 0;
//    this.checkVar = 0;
//  this.check = function(checkController){
//    return this.checkVar === checkController;
//    };


// using SendGrid's Node.js Library - https://github.com/sendgrid/sendgrid-nodejs
    var sendgridUser = ;
    var sendgridPassword =
    var sendgrid  = require('sendgrid')(sendgridUser, sendgridPassword);
    sendgrid.send({
      to:       ,
      from:     'other@example.com',
      subject:  'Hello World',
      text:     'My first email through SendGrid.'
    }, function(err) {
      if (err) { return console.error('noooo!'); }
      console.log('yesssss!');
    });






// DROPDOWN JQuery
//    $(function(){
//      $(".dropdown").hover(
//        function() {
//          $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
//          $(this).toggleClass('open');
//          $('b', this).toggleClass;
//        },
//        function() {
//          $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
//          $(this).toggleClass('open');
//          $('b', this).toggleClass;
//        });
//    });




    //sweetcaptahcs stuff:

    //App.js

//Require the sweetcaptcha module and give it the credentials you were sent upon registration.
//    var sweetcaptcha = new require('sweetcaptcha')(appId, appKey, appSecret);

// The page that your contact form is on should have a route like this
//    app.get('/', function(req, res){

      //get sweetcaptcha html for the contact area
//      sweetcaptcha.api('get_html', function(err,html){
        //Send the guts of the captcha to your template
//        res.render('main', { captcha : html });
//      });

//    });






// google dynamic map needs

    //$scope.isActive = function (viewLocation) {
    //  var active = (viewLocation === $location.path());
    //  return active;
    //};
  });
