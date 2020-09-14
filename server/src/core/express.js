const path = require('path');
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const fileUpload = require('express-fileupload');
const errorHandler = require('errorhandler');
const routes = require('../routes');
const passport = require('./passport');
const config = require('../config');
const CURRENT_WORKING_DIR = process.cwd()

// App setup
const app = express();  

// Middlewares
if (config.env === 'production') {
  app.use(morgan("combined")); // Logger
} else {
  app.use(morgan("dev")); // Logger
}
app.use(compression()); // Compression
app.use(helmet({    
  contentSecurityPolicy: false // Secure app by setting various HTTP headers
})); 
if (config.env !== 'production') {
  app.use(cors()); // Cross-Origin-Resource-Sharing
}
app.use(bodyParser.urlencoded({ extended: true })); // Support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.json()); // parse body params and attache them to req.body
app.use(cookieParser());
app.use(session({
  secret: "polarbear",
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 5},  // This is expire time - 5 days
  resave: true,
  saveUninitialized: true,
}));
app.use(flash()); // Session for storing messages
app.use(fileUpload());  // File uploader
if (config.env === 'development') {
  app.use(errorHandler());  // Error handler
}

// Passport
app.use(passport.initialize()); 

// Routes
app.use(routes); 

// View engine
app.set('views', path.join(CURRENT_WORKING_DIR, './src/views'));
app.set('view engine', 'ejs');

// Set static folder for generated js and css files
app.use(express.static(path.join(CURRENT_WORKING_DIR, 'public'))); 

// Catch 404 errors and forward to error handler by default
app.use((req, res, next) => {
  res.format({
    'application/json': () => next(createError(404, 'Not Found')),
    'text/html': () => {
      res.sendFile(path.resolve(CURRENT_WORKING_DIR, './public/assets/pages/html/404.html'));
    },
    default: () => next(createError(404, 'Not Found')),
  });
});

module.exports = app;
