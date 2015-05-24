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



    //sweetcaptahcs stuff:

    //App.js

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
