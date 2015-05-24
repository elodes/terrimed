/**
 * Created by erinlodes on 5/24/15.
 */
/**
 * Created by erinlodes on 5/24/15.
 */
'use strict';

module.exports = function(app) {
    // Root routing
    var core = require('../controllers/core.server.controller');

    app.route('/contact-form').post(core.sendMail);
};