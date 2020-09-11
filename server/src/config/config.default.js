const path = require('path');

/**
 * Default configuration
 */
let defaultConfig = {
  app: {
    name: 'groom', // TODO: Lowercase, URL compatible name
    title: 'Groom', // TODO: Human friendly name
  },
  auth: {
    verifyEmail: false, // If true, require email verification when signing up
    resetPassword: false, // If true, be able to reset password via email
  },
  mongo: {
    uri: 'This will be overriden by environment variable MONGO_URI',
    testUri: 'mongodb://localhost:27017/groom_test',
  },
  server: {
    host: 'This will be overriden by environment variable SERVER_HOST',
    port: 'This will be overriden by environment variable SERVER_PORT',
    publicUrl:
      'This will be overriden by environment variable SERVER_PUBLIC_URL',
  },
  jwt: {
    secret: 'This will be overriden by environment variable JWT_SECRET',
    algorithm: 'HS512',
    expiresIn: 60 * 24 * 60 * 60, // seconds
  },
  timezone: "est"
};

module.exports = defaultConfig;
