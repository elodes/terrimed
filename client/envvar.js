/**
 * Created by erinlodes on 5/24/15.
 */
'use strict';

module.exports = {
  sweetcaptcha: {
    clientID: process.env.CAPTCHA_ID || 'APP_ID',
    clientSecret: process.env.CAPTCHA_SECRET || 'APP_SECRET',
    clientKey: process.env.CAPTCHA_KEY || 'APP_KEY',
    callbackURL:
  }

  sendgrid: {
    clientID: process.env.SENDGRID_TM_ID || 'APP_ID',
    clientSecret: process.env.SENDGRID_TM_SECRET || 'APP_SECRET',
    callbackURL:
  }

  zoho: {
    user: process.env.ZOHO_TM_USER || 'APP_ID',
    pass: process.env.ZOHO_TM_PASS || 'APP_SECRET'
  }

}
