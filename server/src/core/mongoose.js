const mongoose = require('mongoose');
const config = require('../config');
const seed = require('./seed');
const chalk = require('chalk');

require('../database/models');

mongoose.Promise = global.Promise;

mongoose.set('useCreateIndex', true); // FIXME: fix deprecation warnings
mongoose.set('useNewUrlParser', true); // FIXME: fix deprecation warnings
mongoose.set('useUnifiedTopology', true); // FIXME: fix deprecation warnings

if (config.env !== 'test') {
  mongoose.connect(config.mongo.uri);
  mongoose.connection.once('open', async () => {
    await seed.createUsers();
  });
} else {
  mongoose.connect(config.mongo.testUri);
}

mongoose.connection.on('error', () => {
  console.log(chalk.red('[-] Unable to connect to Mongo instance'));
});
