'use strict';

angular.module('clientApp').controller('clarityCtrl', function($scope) {
    $scope.greeting = 'Hola!';

    var dotenv = require('dotenv');
    dotenv.load();

    var sendgrid_username = process.env.SENDGRID_USERNAME;
    var sendgrid_password = process.env.SENDGRID_PASSWORD;
    var to = process.env.TO;

    var sendgrid = require('sendgrid')(sendgrid_username, sendgrid_password);
    var email = new sendgrid.Email();


    email.addTo(to);
    email.setFrom(to);
    email.setSubject('Owl');
    email.setText('Owl are you doing?');
    email.setHtml('<strong>%how% are you doing?</strong>');
    email.addSubstitution("%how%", "Owl");
    email.addHeader('X-Sent-Using', 'SendGrid-API');
    email.addHeader('X-Transport', 'web');

    sendgrid.send(email, function (err, json) {
      if (err) {
        return console.error(err);
      }
      console.log(json);
    });

  });
