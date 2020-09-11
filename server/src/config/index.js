const dotenv = require('dotenv');
const _ = require('lodash');
const Joi = require('joi');
const chalk = require('chalk');

// import configuration from .env file
dotenv.config();

/**
 * Joi schema for validating environment variables
 */
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test'),
  MONGO_URI: Joi.string().uri().required(),
  SERVER_HOST: Joi.string().required(),
  SERVER_PORT: Joi.number().required(),
  JWT_SECRET: Joi.string().required(),
  TIMEZONE: Joi.string(),
}).unknown();

const { value, error } = envVarsSchema.validate(process.env);

if (error) {
  console.log(
    chalk.red(
      '\n[-] Invalid environment variables. Please edit the ".env" file and restart the process.'
    )
  );
  throw new Error(error.message);
}

let envConfig = {
  env: value.NODE_ENV,
  mongo: {
    uri: value.MONGO_URI,
  },
  server: {
    host: value.SERVER_HOST,
    port: value.SERVER_PORT,
  },
  jwt: {
    secret: value.JWT_SECRET,
  },
  timezone: value.TIMEZONE,
};

let config = {};

if (envConfig.env === 'development') {
  config = require('./config.dev');
} else if (envConfig.env === 'production') {
  config = require('./config.prod');
} else if (envConfig.env === 'test') {
  config = require('./config.test');
}

config = _.merge({}, config, envConfig);

module.exports = config;
