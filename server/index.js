const config = require('./src/config');
const chalk = require('chalk');

// Load mongoose and models
require('./src/core/mongoose');

// Load express
const app = require('./src/core/express');

const port = process.env.port || config.server.port;

app.listen(port, () => 
  console.log(chalk.blue(`\n[*]Groom server is running at ${config.server.host}:${config.server.port}\n`))
);

global.app = app;
