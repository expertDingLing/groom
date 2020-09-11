const _ = require('lodash');
const defaultConfig = require('./config.default');

/**
 * Configuration for development environment
 */
let testConfig = {
  auth: {
    verifyEmail: false, // If true, require email verification when signing up
    resetPassword: false, // If true, be able to reset password via email
  },
  mongo: {
    testUri: `mongodb://localhost:27017/${defaultConfig.app.name}_test`,
  },
};

testConfig = _.merge({}, defaultConfig, testConfig);

module.exports = testConfig;
