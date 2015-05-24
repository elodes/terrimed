/**
 * Created by erinlodes on 5/24/15.
 */
'use strict';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

/**
 * Send an email when the contact from is submitted
 */
exports.sendMail = function(req, res) {

    var data = req.body;

    transporter.sendMail({
        from: data.contactEmail,
        to: 'development@claritycounselingservices.com',
        subject: 'Website contact from ' + data.contactName,
        text: data.contactMsg
    });

    res.json(data);
};