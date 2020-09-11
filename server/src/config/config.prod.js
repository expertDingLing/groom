const path = require('path');
const _ = require('lodash');
const defaultConfig = require('./config.default');

/**
 * Configuration for Production environment
 */
let prodConfig = {
  auth: {
    verifyEmail: false, // If true, require email verification when signing up
    resetPassword: true, // If true, be able to reset password via email
  },
  jwt: {
    algorithm: 'HS512',
    expiresIn: 60 * 24 * 60 * 60, // seconds
  },
};

prodConfig = _.merge({}, defaultConfig, prodConfig);

module.exports = prodConfig;
