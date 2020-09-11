const _ = require('lodash');
const defaultConfig = require('./config.default');

/**
 * Configuration for development environment
 */
let devConfig = {
  auth: {
    verifyEmail: false, // If true, require email verification when signing up
    resetPassword: false, // If true, be able to reset password via email
  },
};

devConfig = _.merge({}, defaultConfig, devConfig);

module.exports = devConfig;
