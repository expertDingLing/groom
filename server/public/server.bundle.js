module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar config = __webpack_require__(/*! ./src/config */ \"./src/config/index.js\");\nvar chalk = __webpack_require__(/*! chalk */ \"chalk\");\n\n// Load mongoose and models\n__webpack_require__(/*! ./src/core/mongoose */ \"./src/core/mongoose.js\");\n\n// Load express\nvar app = __webpack_require__(/*! ./src/core/express */ \"./src/core/express.js\");\n\napp.listen(config.server.port, function () {\n  return console.log(chalk.blue('\\n[*]Groom server is running at ' + config.server.host + ':' + config.server.port + '\\n'));\n});\n\nglobal.app = app;\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/config/config.default.js":
/*!**************************************!*\
  !*** ./src/config/config.default.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\n/**\n * Default configuration\n */\nvar defaultConfig = {\n  app: {\n    name: 'groom', // TODO: Lowercase, URL compatible name\n    title: 'Groom' // TODO: Human friendly name\n  },\n  auth: {\n    verifyEmail: false, // If true, require email verification when signing up\n    resetPassword: false // If true, be able to reset password via email\n  },\n  mongo: {\n    uri: 'This will be overriden by environment variable MONGO_URI',\n    testUri: 'mongodb://localhost:27017/groom_test'\n  },\n  server: {\n    host: 'This will be overriden by environment variable SERVER_HOST',\n    port: 'This will be overriden by environment variable SERVER_PORT',\n    publicUrl: 'This will be overriden by environment variable SERVER_PUBLIC_URL'\n  },\n  jwt: {\n    secret: 'This will be overriden by environment variable JWT_SECRET',\n    algorithm: 'HS512',\n    expiresIn: 60 * 24 * 60 * 60 // seconds\n  },\n  timezone: \"est\"\n};\n\nmodule.exports = defaultConfig;\n\n//# sourceURL=webpack:///./src/config/config.default.js?");

/***/ }),

/***/ "./src/config/config.dev.js":
/*!**********************************!*\
  !*** ./src/config/config.dev.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _ = __webpack_require__(/*! lodash */ \"lodash\");\nvar defaultConfig = __webpack_require__(/*! ./config.default */ \"./src/config/config.default.js\");\n\n/**\n * Configuration for development environment\n */\nvar devConfig = {\n  auth: {\n    verifyEmail: false, // If true, require email verification when signing up\n    resetPassword: false // If true, be able to reset password via email\n  }\n};\n\ndevConfig = _.merge({}, defaultConfig, devConfig);\n\nmodule.exports = devConfig;\n\n//# sourceURL=webpack:///./src/config/config.dev.js?");

/***/ }),

/***/ "./src/config/config.prod.js":
/*!***********************************!*\
  !*** ./src/config/config.prod.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar _ = __webpack_require__(/*! lodash */ \"lodash\");\nvar defaultConfig = __webpack_require__(/*! ./config.default */ \"./src/config/config.default.js\");\n\n/**\n * Configuration for Production environment\n */\nvar prodConfig = {\n  auth: {\n    verifyEmail: false, // If true, require email verification when signing up\n    resetPassword: true // If true, be able to reset password via email\n  },\n  jwt: {\n    algorithm: 'HS512',\n    expiresIn: 60 * 24 * 60 * 60 // seconds\n  }\n};\n\nprodConfig = _.merge({}, defaultConfig, prodConfig);\n\nmodule.exports = prodConfig;\n\n//# sourceURL=webpack:///./src/config/config.prod.js?");

/***/ }),

/***/ "./src/config/config.test.js":
/*!***********************************!*\
  !*** ./src/config/config.test.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _ = __webpack_require__(/*! lodash */ \"lodash\");\nvar defaultConfig = __webpack_require__(/*! ./config.default */ \"./src/config/config.default.js\");\n\n/**\n * Configuration for development environment\n */\nvar testConfig = {\n  auth: {\n    verifyEmail: false, // If true, require email verification when signing up\n    resetPassword: false // If true, be able to reset password via email\n  },\n  mongo: {\n    testUri: 'mongodb://localhost:27017/' + defaultConfig.app.name + '_test'\n  }\n};\n\ntestConfig = _.merge({}, defaultConfig, testConfig);\n\nmodule.exports = testConfig;\n\n//# sourceURL=webpack:///./src/config/config.test.js?");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _ = __webpack_require__(/*! lodash */ \"lodash\");\nvar Joi = __webpack_require__(/*! joi */ \"joi\");\nvar chalk = __webpack_require__(/*! chalk */ \"chalk\");\n\n/**\r\n * Joi schema for validating environment variables\r\n */\nvar envVarsSchema = Joi.object({\n  NODE_ENV: Joi.string().valid('development', 'production', 'test'),\n  MONGO_URI: Joi.string().uri().required(),\n  SERVER_HOST: Joi.string().required(),\n  SERVER_PORT: Joi.number().required(),\n  JWT_SECRET: Joi.string().required(),\n  TIMEZONE: Joi.string()\n}).unknown();\n\nvar _envVarsSchema$valida = envVarsSchema.validate(process.env),\n    value = _envVarsSchema$valida.value,\n    error = _envVarsSchema$valida.error;\n\nif (error) {\n  console.log(chalk.red('\\n[-] Invalid environment variables. Please edit the \".env\" file and restart the process.'));\n  throw new Error(error.message);\n}\n\nvar envConfig = {\n  env: value.NODE_ENV,\n  mongo: {\n    uri: value.MONGO_URI\n  },\n  server: {\n    host: value.SERVER_HOST,\n    port: value.SERVER_PORT\n  },\n  jwt: {\n    secret: value.JWT_SECRET\n  },\n  timezone: value.TIMEZONE\n};\n\nvar config = {};\n\nif (envConfig.env === 'development') {\n  config = __webpack_require__(/*! ./config.dev */ \"./src/config/config.dev.js\");\n} else if (envConfig.env === 'production') {\n  config = __webpack_require__(/*! ./config.prod */ \"./src/config/config.prod.js\");\n} else if (envConfig.env === 'test') {\n  config = __webpack_require__(/*! ./config.test */ \"./src/config/config.test.js\");\n}\n\nconfig = _.merge({}, config, envConfig);\n\nmodule.exports = config;\n\n//# sourceURL=webpack:///./src/config/index.js?");

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar EMAIL_ERROR_MESSAGES = {\n  'string.empty': 'Email cannot be empty',\n  'string.email': 'Email is invalid',\n  'any.required': 'Email is required'\n};\n\nvar PASSWORD_ERROR_MESSAGES = {\n  'string.empty': 'Password cannot be empty',\n  'string.min': 'Password must be at least 8 characters'\n};\n\nvar USERNAME_ERROR_MESSAGE = {\n  'string.empty': 'Username cannot be empty',\n  'string.pattern.base': 'Username must be between 4 to 30 characters and may contain only alphanumeric chacracters, hyphen, dot or underscore',\n  'any.required': 'Username is required'\n};\n\nmodule.exports = {\n  EMAIL_ERROR_MESSAGES: EMAIL_ERROR_MESSAGES,\n  PASSWORD_ERROR_MESSAGES: PASSWORD_ERROR_MESSAGES,\n  USERNAME_ERROR_MESSAGE: USERNAME_ERROR_MESSAGE\n};\n\n//# sourceURL=webpack:///./src/constants/index.js?");

/***/ }),

/***/ "./src/controllers/view/AuthController.js":
/*!************************************************!*\
  !*** ./src/controllers/view/AuthController.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar Joi = __webpack_require__(/*! joi */ \"joi\");\n// const email = require('../core/sendgrid');\nvar constants = __webpack_require__(/*! ../../constants */ \"./src/constants/index.js\");\n\nvar UserModel = __webpack_require__(/*! ../../database/models/user.model */ \"./src/database/models/user.model.js\");\n\nvar BaseController = __webpack_require__(/*! ./BaseController */ \"./src/controllers/view/BaseController.js\");\nvar View = __webpack_require__(/*! ../../views/base */ \"./src/views/base.js\");\n\nvar signInSchema = Joi.object({\n    username: Joi.string().pattern(/^[a-zA-Z0-9.\\-_]{4,30}$/).messages(constants.USERNAME_ERROR_MESSAGE),\n    email: Joi.string().email().messages(constants.EMAIL_ERROR_MESSAGES),\n    password: Joi.string().required().messages(constants.PASSWORD_ERROR_MESSAGES)\n}).xor('username', 'email').messages({ 'object.missing': 'Either username or email must be provided' });\n\nvar createSignInResponse = function createSignInResponse(user, provider) {\n    return _extends({}, user.generateJwtToken(), {\n        signedInWith: provider,\n        user: user.toJsonFor(user)\n    });\n};\n\n// const signUpSchema = Joi.object({\n//     username: Joi.string()\n//         .required()\n//         .pattern(/^[a-zA-Z0-9.\\-_]{4,30}$/)\n//         .messages(constants.username_ERROR_MESSAGE),\n//     email: Joi.string()\n//         .required()\n//         .email()\n//         .messages(constants.EMAIL_ERROR_MESSAGES),\n//     password: Joi.string()\n//         .required()\n//         .min(8)\n//         .messages(constants.PASSWORD_ERROR_MESSAGES),\n// });\n\n// const resetPasswordSchema = Joi.object({\n//     email: Joi.string()\n//         .required()\n//         .email()\n//         .messages(constants.EMAIL_ERROR_MESSAGES),\n//     password: Joi.string()\n//         .required()\n//         .min(8)\n//         .messages(constants.PASSWORD_ERROR_MESSAGES),\n// });\n\n\n// const sendVerificationEmailAsync = (user) => {\n//     return sendEmailHelperAsync(\n//         user,\n//         'Verify your email',\n//         `Welcome to ${config.app.title}`,\n//         'Before you can start using your account, please verify it by following the link below:',\n//         'Verify Email',\n//         `${config.server.publicUrl}/verify-email/${user.token}` // FIXME: fix port number\n//     );\n// };\n\n// const sendEmailHelperAsync = (\n//     user,\n//     subject,\n//     title,\n//     content,\n//     buttonText,\n//     url\n// ) => {\n//     return email.send({\n//         to: user.email,\n//         from: `${config.app.title} <${config.email.from}>`,\n//         subject: `${config.app.title} - ${subject}`,\n//         templatePath: `${config.paths.root}/templates/email.html`,\n//         dynamicTemplateData: {\n//             boxTitle: title,\n//             first_name: user.first_name,\n//             content,\n//             buttonText,\n//             url,\n//             signature: config.email.signature,\n//         },\n//     });\n// };\n\n\nmodule.exports = BaseController.extend({\n    name: 'AuthController',\n\n    login: function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n            var v;\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            v = void 0;\n\n                            v = new View(res, 'pages/auth/login');\n                            v.render({\n                                title: 'Sign In',\n                                session: req.session,\n                                error: req.flash(\"error\"),\n                                success: req.flash(\"success\")\n                            });\n\n                        case 3:\n                        case 'end':\n                            return _context.stop();\n                    }\n                }\n            }, _callee, this);\n        }));\n\n        function login(_x, _x2) {\n            return _ref.apply(this, arguments);\n        }\n\n        return login;\n    }(),\n\n    // register: async function (req, res) {\n    //     let v;\n    //     if (this.isLogin(req)) {\n    //         return res.redirect('/dashboard');\n    //     }\n    //     v = new View(res, 'auth/register');\n    //     v.render({\n    //         title: 'Sign Up',\n    //         session: req.session,\n    //         error: req.flash(\"error\"),\n    //         success: req.flash(\"success\"),\n    //     })\n    // },\n\n    validateLocalSignInPayload: function validateLocalSignInPayload(req, res, next) {\n        signInSchema.validateAsync(req.body).then(function (payload) {\n            req.body = payload;\n            req.body.usernameOrEmail = req.body.username || req.body.email;\n            next();\n        }).catch(function (error) {\n            req.flash('error', error.details[0].message);\n            next();\n        });\n    },\n\n    localSignIn: function () {\n        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {\n            var signinData, userInfo, logincnt, backURL;\n            return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                while (1) {\n                    switch (_context2.prev = _context2.next) {\n                        case 0:\n                            if (!req.user) {\n                                _context2.next = 21;\n                                break;\n                            }\n\n                            signinData = createSignInResponse(req.user, 'local');\n                            _context2.next = 4;\n                            return UserModel.findOne({ username: req.user.username });\n\n                        case 4:\n                            userInfo = _context2.sent;\n\n                            if (!(userInfo.status != 'active')) {\n                                _context2.next = 8;\n                                break;\n                            }\n\n                            req.flash('error', 'Your account does not be activated, it should be activated by admin');\n                            return _context2.abrupt('return', res.redirect('/auth/login'));\n\n                        case 8:\n\n                            //Set Login Number\n                            logincnt = userInfo.loginCount ? userInfo.loginCount : 0;\n\n                            userInfo.loginCount = logincnt + 1;\n                            userInfo.ipAddress = this.getClientIp(req);\n                            _context2.next = 13;\n                            return userInfo.save();\n\n                        case 13:\n\n                            req.session.login = true;\n                            req.session.user = userInfo;\n                            req.session.signinData = signinData;\n                            _context2.next = 18;\n                            return req.session.save();\n\n                        case 18:\n                            backURL = req.session.redirectTo || '/';\n\n                            delete req.session.redirectTo;\n\n                            return _context2.abrupt('return', res.redirect(backURL));\n\n                        case 21:\n                        case 'end':\n                            return _context2.stop();\n                    }\n                }\n            }, _callee2, this);\n        }));\n\n        function localSignIn(_x3, _x4, _x5) {\n            return _ref2.apply(this, arguments);\n        }\n\n        return localSignIn;\n    }(),\n\n    // signUp: async function (req, res, next) {\n    //     let newUser;\n    //     let isOauthAccount = false;\n    //     signUpSchema\n    //         .validateAsync(req.body)\n    //         .then((payload) => {\n    //             req.body = payload;\n    //             return User.findOne({\n    //                 $or: [{ email: payload.email }, { username: payload.username }],\n    //             });\n    //         })\n    //         .then((existingUser) => {\n    //             if (existingUser) {\n    //                 if (existingUser.email === req.body.email) {\n    //                     if (existingUser.provider.local) {\n    //                         req.flash('error', 'Email is already in use');\n    //                         return res.redirect('/auth/register');\n    //                     } else {\n    //                         newUser = existingUser;\n    //                         isOauthAccount = true;\n    //                     }\n    //                 } else {\n    //                     req.flash('error', 'Username is already in use');\n    //                     return res.redirect('/auth/register');\n    //                 }\n    //             } else {\n    //                 newUser = new User(req.body);\n    //                 newUser.setSubId();\n    //             }\n\n    //             newUser.provider.local = {\n    //                 userId: newUser._id,\n    //                 picture: '/assets/images/dashboard/man.jpg'\n    //             };\n    //             return newUser.setPasswordAsync(req.body.password);\n    //         })\n    //         .then(() => {\n    //             if (config.auth.verifyEmail && !isOauthAccount) {\n    //                 newUser.setToken('verify-email');\n    //                 newUser.status = 'unverified-email';\n    //             }\n    //             return newUser.save();\n    //         })\n    //         .then((user) => {\n    //             if (config.auth.verifyEmail && !isOauthAccount) {\n    //                 return sendVerificationEmailAsync(user).then((result) => {\n    //                     req.flash('success', 'A verification email has been sent to your email');\n    //                     return res.redirect('/auth/register');\n    //                 });\n    //             }\n\n    //             req.flash('success', 'Your account has been created successfully');\n    //             return res.redirect('/auth/login');\n    //         })\n    //         .catch((e) => {\n    //             var messages = [];\n    //             e.details.map(function (detail) {\n    //                 messages.push(detail.message);\n    //             })\n    //             console.log('-- e : ', messages.join('\\n'))\n    //             req.flash('error', messages.join('\\n'));\n    //             return res.redirect('/auth/login');\n    //         });\n    // },\n\n    // verifyEmail: (req, res, next) => {\n    //     if (!config.auth.verifyEmail) {\n    //         req.flash('error', 'Email verification functionality is not available');\n    //         return res.redirect('/auth/register');\n    //     }\n\n    //     if (!req.params.token) {\n    //         req.flash('error', 'No token provided');\n    //         return res.redirect('/auth/register');\n    //     }\n\n    //     return User.findOne({\n    //         token: req.params.token,\n    //         token_purpose: 'verify-email',\n    //     })\n    //         .then((user) => {\n    //             if (!user) {\n    //                 req.flash('error', 'Token expired');\n    //                 return res.redirect('/auth/register');\n    //             }\n    //             user.clearToken();\n    //             user.status = 'active';\n    //             return user.save();\n    //         })\n    //         .then((user) => {\n    //             req.flash('success', \"Email verified\");\n    //             return res.redirect('/auth/login');\n    //         })\n    //         .catch(next);\n    // },\n\n    logout: function () {\n        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {\n            return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                while (1) {\n                    switch (_context3.prev = _context3.next) {\n                        case 0:\n                            req.session.login = false;\n                            req.session.user = null;\n                            req.session.maxLoginCnt = null;\n                            _context3.next = 5;\n                            return req.session.save();\n\n                        case 5:\n                            return _context3.abrupt('return', res.redirect('/auth/login'));\n\n                        case 6:\n                        case 'end':\n                            return _context3.stop();\n                    }\n                }\n            }, _callee3, this);\n        }));\n\n        function logout(_x6, _x7) {\n            return _ref3.apply(this, arguments);\n        }\n\n        return logout;\n    }()\n\n    // showForgotPassword: async function (req, res) {\n    //     let v;\n    //     if (this.isLogin(req)) {\n    //         return res.redirect('/dashboard');\n    //     }\n    //     v = new View(res, 'auth/forgot-password');\n    //     v.render({\n    //         title: 'Forgot Password',\n    //         session: req.session,\n    //         error: req.flash(\"error\"),\n    //         success: req.flash(\"success\"),\n    //     })\n    // },\n\n    // forgotPassword: (req, res, next) => {\n    //     sendTokenSchema\n    //         .validateAsync(req.body)\n    //         .then((payload) => {\n    //             req.body = payload;\n    //             if (!config.auth.resetPassword) {\n    //                 req.flash('error', 'Password reset functionality is not available');\n    //                 return res.redirect('/auth/forgot-password');\n    //             }\n\n    //             User.findOne({ email: req.body.email })\n    //                 .then((user) => {\n    //                     if (!user) {\n    //                         req.flash('error', 'Email not associated with any acount');\n    //                         return res.redirect('/auth/forgot-password');\n    //                     }\n    //                     user.setToken(req.body.token_purpose);\n    //                     return user.save();\n    //                 })\n    //                 .then((user) => {\n    //                     return sendEmailHelperAsync(\n    //                         user,\n    //                         'Password reset',\n    //                         'Password reset',\n    //                         `Someone requested a new password for your ${config.app.title} account.\n    //                         If this was you, click button below to reset your password.\n    //                         Otherwise, ignore this email.`,\n    //                         'Reset Password',\n    //                         `${config.server.publicUrl}/reset-password/${user.token}` // FIXME: Fix port number\n    //                     );\n    //                 })\n    //                 .then((result) => {\n    //                     req.flash('success', 'A password-reset email has been sent to your email');\n    //                     return res.redirect('/auth/forgot-password');\n    //                 })\n    //                 .catch(next);\n    //         })\n    //         .catch(next);\n    // },\n\n    // showResetPassword: async function (req, res, next) {\n    //     let token, userinfo;\n    //     token = req.params.token;\n    //     userinfo = await UserModel.findOne({ token: token });\n    //     if (userinfo != null) {\n    //         var v = new View(res, 'auth/change-password');\n    //         v.render({\n    //             token: token,\n    //             session: req.session,\n    //             error: req.flash(\"error\"),\n    //             success: req.flash(\"success\"),\n    //             title: 'Change Password'\n    //         });\n    //     } else {\n    //         return res.redirect('/auth/login');\n    //     }\n    // },\n\n    // resetPassword: async function (req, res, next) {\n    //     if (!config.auth.resetPassword) {\n    //         req.flash('error', 'Password reset functionality is not available');\n    //         return res.redirect('/auth/forgot-password');\n    //     }\n\n    //     if (!req.params.token) {\n    //         req.flash('error', 'Password reset functionality is not available');\n    //         return res.redirect('/auth/forgot-password');\n    //     }\n\n    //     let existingUser;\n\n    //     resetPasswordSchema\n    //         .validateAsync(req.body)\n    //         .then((payload) => {\n    //             req.body = payload;\n\n    //             return User.findOne({\n    //                 email: req.body.email,\n    //                 token: req.params.token,\n    //                 token_purpose: 'reset-password',\n    //             });\n    //         })\n    //         .then((user) => {\n    //             existingUser = user;\n    //             if (!existingUser) {\n    //                 req.flash('error', 'Token expired');\n    //                 return res.redirect('/auth/forgot-password');\n    //             }\n    //             existingUser.clearToken();\n    //             existingUser.setSubId(); // invalidate all issued JWT tokens\n    //             return existingUser.setPasswordAsync(req.body.password);\n    //         })\n    //         .then(() => {\n    //             return existingUser.save();\n    //         })\n    //         .then((user) => {\n    //             req.flash(\"success\", 'New password set successfully.');\n    //             return res.redirect('/auth/login');\n    //         })\n    //         .catch(next);\n    // },\n});\n\n//# sourceURL=webpack:///./src/controllers/view/AuthController.js?");

/***/ }),

/***/ "./src/controllers/view/BaseController.js":
/*!************************************************!*\
  !*** ./src/controllers/view/BaseController.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _ = __webpack_require__(/*! lodash */ \"lodash\");\nvar config = __webpack_require__(/*! ../../config */ \"./src/config/index.js\");\n\nvar baseController = {\n\tname: \"BaseController\",\n\n\textend: function extend(child) {\n\t\treturn _.extend({}, this, child);\n\t},\n\n\trun: function run(req, res, next) {},\n\n\tisLogin: function isLogin(req) {\n\t\tif (typeof req.session.login != \"undefined\") {\n\t\t\treturn req.session.login;\n\t\t} else {\n\t\t\treturn false;\n\t\t}\n\t},\n\n\tmakeID: function makeID() {\n\t\tvar prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\t\tvar length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;\n\n\t\tvar text = \"\";\n\t\tvar possible = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n\t\tfor (var i = 0; i < length; i++) {\n\t\t\ttext += possible.charAt(Math.floor(Math.random() * possible.length));\n\t\t}return prefix + text;\n\t},\n\n\tisEmail: function isEmail(email) {\n\t\tvar emailRegex = /^([\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4})?$/;\n\t\treturn emailRegex.test(email);\n\t},\n\n\tisURL: function isURL(str) {\n\t\tvar regexp = /^(?:(?:https?|ftp):\\/\\/)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:\\/\\S*)?$/;\n\t\treturn regexp.test(str);\n\t},\n\n\tcheckSpecialStr: function checkSpecialStr(str) {\n\t\tvar strFormat = /[ !@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]/;\n\t\treturn strFormat.test(str);\n\t},\n\n\tvalidatePassord: function validatePassord(password) {\n\t\t/*\n  /^\n  (?=.*\\d)          // should contain at least one digit\n  (?=.*[a-z])       // should contain at least one lower case\n  (?=.*[A-Z])       // should contain at least one upper case\n  [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters\n  $/\n  */\n\t\treturn password.match(/^(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/);\n\t},\n\n\tgetRandomColor: function getRandomColor() {\n\t\tvar letters = '0123456789ABCDEF';\n\t\tvar color = '#';\n\t\tfor (var i = 0; i < 6; i++) {\n\t\t\tcolor += letters[Math.floor(Math.random() * 16)];\n\t\t}\n\t\treturn color;\n\t},\n\n\tgetTs: function getTs() {\n\t\treturn Math.round(new Date().getTime() / 1000);\n\t},\n\n\tgetCurDate: function getCurDate() {\n\t\tvar severDt = new Date();\n\t\tvar localDt = new Date(severDt.getTime() + config.tz);\n\t\treturn new Date(localDt.toDateString());\n\t},\n\n\tgetClientIp: function getClientIp(req, res) {\n\t\tvar ip_address = req.connection.remoteAddress;\n\t\tif (req.headers['x-forwarded-for'] != undefined) {\n\t\t\tip_address = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;\n\t\t}\n\t\tip_address = ip_address.split(',')[0];\n\t\tif (ip_address.substr(0, 1) == ':') ip_address = ip_address.substr(7);\n\t\treturn ip_address;\n\t}\n\n};\n\nmodule.exports = baseController;\n\n//# sourceURL=webpack:///./src/controllers/view/BaseController.js?");

/***/ }),

/***/ "./src/controllers/view/BookingController.js":
/*!***************************************************!*\
  !*** ./src/controllers/view/BookingController.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar BaseController = __webpack_require__(/*! ./BaseController */ \"./src/controllers/view/BaseController.js\");\nvar View = __webpack_require__(/*! ../../views/base */ \"./src/views/base.js\");\n\nmodule.exports = BaseController.extend({\n    name: 'BookingController',\n\n    overview: function overview(req, res) {\n        var v = void 0;\n        if (!this.isLogin(req)) {\n            req.session.redirectTo = '/';\n            return res.redirect('/auth/login');\n        }\n\n        v = new View(res, 'pages/booking/overview');\n        v.render({\n            title: 'Calendar Overview',\n            path: 'Booking / Overview',\n            session: req.session\n        });\n    },\n\n    listing: function listing(req, res) {\n        var v = void 0;\n        if (!this.isLogin(req)) {\n            req.session.redirectTo = '/';\n            return res.redirect('/auth/login');\n        }\n\n        v = new View(res, 'pages/booking/listing');\n        v.render({\n            title: 'Booking Listing',\n            path: 'Booking / Listing',\n            session: req.session\n        });\n    }\n});\n\n//# sourceURL=webpack:///./src/controllers/view/BookingController.js?");

/***/ }),

/***/ "./src/controllers/view/CategoriesController.js":
/*!******************************************************!*\
  !*** ./src/controllers/view/CategoriesController.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar BaseController = __webpack_require__(/*! ./BaseController */ \"./src/controllers/view/BaseController.js\");\nvar View = __webpack_require__(/*! ../../views/base */ \"./src/views/base.js\");\n\nmodule.exports = BaseController.extend({\n    name: 'CategoriesController',\n\n    manage: function manage(req, res) {\n        var v = void 0;\n        if (!this.isLogin(req)) {\n            req.session.redirectTo = '/';\n            return res.redirect('/auth/login');\n        }\n\n        v = new View(res, 'pages/categories/manage');\n        v.render({\n            title: 'Categories',\n            path: 'Categories / Manage Categories',\n            session: req.session\n        });\n    }\n});\n\n//# sourceURL=webpack:///./src/controllers/view/CategoriesController.js?");

/***/ }),

/***/ "./src/controllers/view/DashboardController.js":
/*!*****************************************************!*\
  !*** ./src/controllers/view/DashboardController.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar BaseController = __webpack_require__(/*! ./BaseController */ \"./src/controllers/view/BaseController.js\");\nvar View = __webpack_require__(/*! ../../views/base */ \"./src/views/base.js\");\n\nmodule.exports = BaseController.extend({\n    name: 'DashboardController',\n\n    index: function index(req, res) {\n        var v = void 0;\n        if (!this.isLogin(req)) {\n            req.session.redirectTo = '/';\n            return res.redirect('/auth/login');\n        }\n\n        v = new View(res, 'pages/dashboard');\n        v.render({\n            title: 'Dashboard',\n            session: req.session\n        });\n    }\n});\n\n//# sourceURL=webpack:///./src/controllers/view/DashboardController.js?");

/***/ }),

/***/ "./src/controllers/view/LocationsController.js":
/*!*****************************************************!*\
  !*** ./src/controllers/view/LocationsController.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar BaseController = __webpack_require__(/*! ./BaseController */ \"./src/controllers/view/BaseController.js\");\nvar View = __webpack_require__(/*! ../../views/base */ \"./src/views/base.js\");\n\nmodule.exports = BaseController.extend({\n    name: 'LocationsController',\n\n    states: function states(req, res) {\n        var v = void 0;\n        if (!this.isLogin(req)) {\n            req.session.redirectTo = '/';\n            return res.redirect('/auth/login');\n        }\n\n        v = new View(res, 'pages/locations/states');\n        v.render({\n            title: 'State List',\n            path: 'Locations / States',\n            session: req.session\n        });\n    },\n\n    cities: function cities(req, res) {\n        var v = void 0;\n        if (!this.isLogin(req)) {\n            req.session.redirectTo = '/';\n            return res.redirect('/auth/login');\n        }\n\n        v = new View(res, 'pages/locations/cities');\n        v.render({\n            title: 'City List',\n            path: 'Locations / Cities',\n            session: req.session\n        });\n    },\n\n    location406: function location406(req, res) {\n        var v = void 0;\n        if (!this.isLogin(req)) {\n            req.session.redirectTo = '/';\n            return res.redirect('/auth/login');\n        }\n\n        v = new View(res, 'pages/locations/location406');\n        v.render({\n            title: 'Locations (406)',\n            path: 'Locations / Locations (406)',\n            session: req.session\n        });\n    }\n});\n\n//# sourceURL=webpack:///./src/controllers/view/LocationsController.js?");

/***/ }),

/***/ "./src/core/express.js":
/*!*****************************!*\
  !*** ./src/core/express.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar express = __webpack_require__(/*! express */ \"express\");\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\nvar compression = __webpack_require__(/*! compression */ \"compression\");\nvar helmet = __webpack_require__(/*! helmet */ \"helmet\");\nvar cors = __webpack_require__(/*! cors */ \"cors\");\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nvar cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\nvar session = __webpack_require__(/*! express-session */ \"express-session\");\nvar flash = __webpack_require__(/*! connect-flash */ \"connect-flash\");\nvar fileUpload = __webpack_require__(/*! express-fileupload */ \"express-fileupload\");\nvar errorHandler = __webpack_require__(/*! errorhandler */ \"errorhandler\");\nvar routes = __webpack_require__(/*! ../routes */ \"./src/routes/index.js\");\nvar passport = __webpack_require__(/*! ./passport */ \"./src/core/passport.js\");\nvar config = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\nvar CURRENT_WORKING_DIR = process.cwd();\n\n// App setup\nvar app = express();\n\n// Middlewares\nif (config.env === 'production') {\n  app.use(morgan(\"combined\")); // Logger\n} else {\n  app.use(morgan(\"dev\")); // Logger\n}\napp.use(compression()); // Compression\napp.use(helmet({\n  contentSecurityPolicy: false // Secure app by setting various HTTP headers\n}));\nif (config.env !== 'production') {\n  app.use(cors()); // Cross-Origin-Resource-Sharing\n}\napp.use(bodyParser.urlencoded({ extended: true })); // Support parsing of application/x-www-form-urlencoded post data\napp.use(bodyParser.json()); // parse body params and attache them to req.body\napp.use(cookieParser());\napp.use(session({\n  secret: \"polarbear\",\n  cookie: { maxAge: 1000 * 60 * 60 * 24 * 5 }, // This is expire time - 5 days\n  resave: true,\n  saveUninitialized: true\n}));\napp.use(flash()); // Session for storing messages\napp.use(fileUpload()); // File uploader\nif (config.env === 'development') {\n  app.use(errorHandler()); // Error handler\n}\n\n// Passport\napp.use(passport.initialize());\n\n// Routes\napp.use(routes);\n\n// View engine\napp.set('views', path.join(CURRENT_WORKING_DIR, './src/views'));\napp.set('view engine', 'ejs');\n\n// Set static folder for generated js and css files\napp.use(express.static(path.join(CURRENT_WORKING_DIR, 'public')));\n\n// Catch 404 errors and forward to error handler by default\napp.use(function (req, res, next) {\n  res.format({\n    'application/json': function applicationJson() {\n      return next(createError(404, 'Not Found'));\n    },\n    'text/html': function textHtml() {\n      res.sendFile(path.resolve(CURRENT_WORKING_DIR, './public/assets/pages/html/404.html'));\n    },\n    default: function _default() {\n      return next(createError(404, 'Not Found'));\n    }\n  });\n});\n\nmodule.exports = app;\n\n//# sourceURL=webpack:///./src/core/express.js?");

/***/ }),

/***/ "./src/core/mongoose.js":
/*!******************************!*\
  !*** ./src/core/mongoose.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar config = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\nvar seed = __webpack_require__(/*! ./seed */ \"./src/core/seed.js\");\nvar chalk = __webpack_require__(/*! chalk */ \"chalk\");\n\n__webpack_require__(/*! ../database/models */ \"./src/database/models/index.js\");\n\nmongoose.Promise = global.Promise;\n\nmongoose.set('useCreateIndex', true); // FIXME: fix deprecation warnings\nmongoose.set('useNewUrlParser', true); // FIXME: fix deprecation warnings\nmongoose.set('useUnifiedTopology', true); // FIXME: fix deprecation warnings\n\nif (config.env !== 'test') {\n  mongoose.connect(config.mongo.uri);\n  mongoose.connection.once('open', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return seed.createUsers();\n\n          case 2:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  })));\n} else {\n  mongoose.connect(config.mongo.testUri);\n}\n\nmongoose.connection.on('error', function () {\n  console.log(chalk.red('[-] Unable to connect to Mongo instance'));\n});\n\n//# sourceURL=webpack:///./src/core/mongoose.js?");

/***/ }),

/***/ "./src/core/passport.js":
/*!******************************!*\
  !*** ./src/core/passport.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar LocalStrategy = __webpack_require__(/*! passport-local */ \"passport-local\");\nvar JwtStrategy = __webpack_require__(/*! passport-jwt */ \"passport-jwt\").Strategy;\nvar ExtractJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\").ExtractJwt;\nvar config = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n\nvar User = mongoose.model('user');\n\n// Create local strategy\nvar localStrategy = new LocalStrategy({\n  usernameField: 'usernameOrEmail',\n  passwordField: 'password'\n}, function (usernameOrEmail, password, done) {\n  User.findOne({\n    $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }]\n  }).then(function (user) {\n    if (!user) {\n      return done(null, false, {\n        message: 'Username or email does not exist'\n      });\n    }\n\n    user.comparePasswordAsync(password).then(function (isMatch) {\n      if (!isMatch) {\n        return done(null, false, { message: 'Password is incorrect' });\n      }\n\n      if (config.auth.verifyEmail) {\n        if (user.status === 'unverified-email') {\n          return done(null, false, { message: 'Email is not verified' });\n        }\n      }\n\n      return done(null, user);\n    });\n  }).catch(done);\n});\n\n// Create jwt strategy\nvar jwtStrategy = new JwtStrategy({\n  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),\n  secretOrKey: config.jwt.secret\n}, function (jwtPayload, done) {\n  User.findById(jwtPayload.userId).then(function (user) {\n    if (!user) {\n      return done(null, false, { message: 'Invalid credentials' });\n    }\n\n    if (user.status !== 'active') {\n      return done(null, false, {\n        message: 'Disabled or unverified account'\n      });\n    }\n\n    if (user._id !== jwtPayload.userId) {\n      return done(null, false, { message: 'Invalid JWT token' });\n    }\n\n    return done(null, user);\n  }).catch(done);\n});\n\npassport.use(localStrategy);\npassport.use(jwtStrategy);\n\nmodule.exports = passport;\n\n//# sourceURL=webpack:///./src/core/passport.js?");

/***/ }),

/***/ "./src/core/seed.js":
/*!**************************!*\
  !*** ./src/core/seed.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar chalk = __webpack_require__(/*! chalk */ \"chalk\");\n\nvar _require = __webpack_require__(/*! ../database/seeds/users */ \"./src/database/seeds/users.js\"),\n    usersSeed = _require.usersSeed;\n\n/**\n * @function createUsers\n * Seed the given list of users\n *\n * @param {string} users The array of user info to be created\n * @returns {Promise} Resolve with a list of newly added users\n */\n\n\nmodule.exports.createUsers = function () {\n\n  var User = mongoose.model('user');\n  var addedUsers = [];\n\n  return usersSeed.reduce(function (sequence, userInfo) {\n    return sequence.then(function () {\n      return User.findOne({\n        $or: [{ username: userInfo.username }, { email: userInfo.email }]\n      });\n    }).then(function (existingUser) {\n      if (existingUser) {\n        throw new Error(chalk.yellow('[-] [Warning] Database seeding: Email (' + userInfo.email + ') or username (' + userInfo.username + ') already in use.'));\n      }\n      var user = new User(userInfo);\n      // user.setSubId();\n      return user.setPasswordAsync(userInfo.password).then(function () {\n        return user.save();\n      });\n    }).then(function (user) {\n      console.log(chalk.green('[+] Database Seeding: A new user added (' + userInfo.username + ' - ' + userInfo.email + ' - ' + userInfo.password + ')'));\n      addedUsers.push(user);\n    }).catch(function (err) {\n      console.log(err.message);\n    });\n  }, Promise.resolve()).then(function () {\n    return Promise.resolve(addedUsers);\n  });\n};\n\n//# sourceURL=webpack:///./src/core/seed.js?");

/***/ }),

/***/ "./src/database/models/index.js":
/*!**************************************!*\
  !*** ./src/database/models/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./user.model */ \"./src/database/models/user.model.js\");\n\n//# sourceURL=webpack:///./src/database/models/index.js?");

/***/ }),

/***/ "./src/database/models/user.model.js":
/*!*******************************************!*\
  !*** ./src/database/models/user.model.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nvar _ = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _require = __webpack_require__(/*! uuid */ \"uuid\"),\n    uuidv4 = _require.v4;\n\nvar config = __webpack_require__(/*! ../../config */ \"./src/config/index.js\");\n\nvar _require2 = __webpack_require__(/*! mongoose */ \"mongoose\"),\n    ObjectId = _require2.ObjectId;\n\n// Define Schema\n\n\nvar userSchema = new mongoose.Schema({\n  username: {\n    type: String,\n    unique: true,\n    trim: true,\n    required: [true, 'Username is required'],\n    match: [/^[a-zA-Z0-9.\\-_]{4,30}$/, 'Must be between 4 to 30 characters and may contain only alphanumeric chacracters, hyphen, dot or underscore']\n  },\n  email: {\n    type: String,\n    unique: true,\n    trim: true,\n    required: [true, 'Email is required'],\n    match: [/^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/, 'Invalid email']\n  },\n  profile: {\n    firstName: { type: String, required: true, trim: true },\n    lastName: { type: String, required: true, trim: true },\n    gender: { type: String, enum: ['Male', 'Female'] },\n    birthDate: { type: Date },\n    phoneNumber: { type: String },\n    country: { type: String },\n    state: { type: String },\n    city: { type: String },\n    address: { type: String },\n    photo: { type: String, default: '/assets/layout/img/avatar.png' },\n    governmentId: { type: String },\n    emergencyContact: { type: String }\n  },\n\n  // Do NOT set directly, call user.setPasswordAsync(password)\n  hashedPassword: { type: String },\n  // subId is used to validate JWT token.\n  // Do NOT set directly, call user.setSubId().\n  // subId: { type: String, unique: true },\n  ipAddress: { type: String },\n  loginCount: { type: Number, default: 0 },\n  status: {\n    type: String,\n    enum: ['active', 'disabled', 'unverified-email'],\n    default: 'active',\n    index: true\n  },\n  role: {\n    type: String,\n    enum: ['customer', 'shop-owner', 'shop-manager', 'service-provider', 'super-admin', 'admin', 'contributor'],\n    default: 'customer',\n    index: true\n  },\n  // The permissions field will allow a normal user to perform\n  // admin-like actions.\n  // By default, superadmin and admin can do any thing (permissions field is ignored).\n  // So, call user.hasPermission(permission) to determine the permission.\n  // The rules for updating and deleting are implemented in createXAuthorizationMiddleware middleware.\n  permissions: {\n    user: {\n      add: { type: Boolean, default: false },\n      edit: { type: Boolean, default: false },\n      delete: { type: Boolean, default: false },\n      read: { type: Boolean, default: false }\n    },\n    shop: {\n      add: { type: Boolean, default: false },\n      edit: { type: Boolean, default: false },\n      delete: { type: Boolean, default: false }\n    },\n    professional: {\n      add: { type: Boolean, default: false },\n      edit: { type: Boolean, default: false },\n      delete: { type: Boolean, default: false }\n    },\n    service: {\n      add: { type: Boolean, default: false },\n      edit: { type: Boolean, default: false },\n      delete: { type: Boolean, default: false }\n    },\n    booking: {\n      add: { type: Boolean, default: false },\n      edit: { type: Boolean, default: false },\n      delete: { type: Boolean, default: false }\n    },\n    financial: {\n      add: { type: Boolean, default: false },\n      edit: { type: Boolean, default: false },\n      delete: { type: Boolean, default: false }\n    },\n    promotion: {\n      add: { type: Boolean, default: false },\n      edit: { type: Boolean, default: false },\n      delete: { type: Boolean, default: false }\n    },\n    review: {\n      flag: { type: Boolean, default: false },\n      delete: { type: Boolean, default: false }\n    },\n    location: {\n      flag: { type: Boolean, default: false },\n      delete: { type: Boolean, default: false }\n    }\n  },\n  // token for veryfication email or reset password purpose, NOT JWT token\n  // Do NOT set directly, call user.setToken(tokenPurpose) user.clearToken()\n  // to set and clear token and tokenPurpose\n  token: { type: String, index: true },\n  tokenPurpose: { type: String, enum: ['verify-email', 'reset-password'] }\n\n}, { timestamps: true });\n\nuserSchema.virtual('fullName').get(function () {\n  return this.profile.firstName + ' ' + this.profile.lastName;\n});\n\n/**\r\n * @returns {object} The user profile object without sensitive info such as hashed password\r\n */\nuserSchema.methods.toJsonFor = function (user) {\n  var userObj = this.toObject();\n  if (user && (user.hasPermission('user', 'read') || user.id === this.id)) {\n    return {\n      id: userObj._id,\n      username: userObj.username,\n      email: userObj.email,\n      profile: userObj.profile,\n      status: userObj.status,\n      role: userObj.role,\n      permissions: userObj.permissions,\n      createdAt: userObj.createdAt,\n      updatedAt: userObj.updatedAt\n    };\n  } else {\n    // public profile\n    return {\n      id: userObj._id,\n      username: userObj.username,\n      email: userObj.email,\n      createdAt: userObj.createdAt,\n      updatedAt: userObj.updatedAt\n    };\n  }\n};\n\n/**\r\n * Set subId to this user.\r\n * Invalidate all existing JWT tokens\r\n *\r\n */\n// userSchema.methods.setSubId = function () {\n//   this.subId = new mongoose.Types.ObjectId().toHexString();\n// };\n\n/**\r\n * Set password to this user\r\n * The password will be hashed and assigned to hashedPassword field\r\n *\r\n * Call this function when updating the user password\r\n *\r\n * @param {Promise} password Resolve with null value\r\n */\nuserSchema.methods.setPasswordAsync = function (password) {\n  var _this = this;\n\n  var saltRounds = 10;\n  return bcrypt.hash(password, saltRounds).then(function (hash) {\n    _this.hashedPassword = hash;\n  });\n};\n\n/**\r\n * Compare candidate password with the stored one\r\n *\r\n * @returns {Promise} Resolve with a boolean value\r\n */\nuserSchema.methods.comparePasswordAsync = function (candidatePassword) {\n  if (!this.hashedPassword) {\n    return Promise.resolve(false);\n  }\n  return bcrypt.compare(candidatePassword, this.hashedPassword);\n};\n\n/**\r\n * Generate JWT token for authentication\r\n *\r\n * @returns {object} An object contains JWT token and expiresAt (seconds) property\r\n */\nuserSchema.methods.generateJwtToken = function () {\n  var iat = Math.floor(Date.now() / 1000);\n  var expiresAt = iat + config.jwt.expiresIn;\n  var token = jwt.sign({ userId: this._id, iat: iat }, config.jwt.secret, {\n    algorithm: config.jwt.algorithm,\n    expiresIn: config.jwt.expiresIn // seconds\n  });\n  return { token: token, expiresAt: expiresAt };\n};\n\n/**\r\n * Set token and token purpose field based on given token purpose\r\n *\r\n * @param {string} purpose The purpose of the token.\r\n */\nuserSchema.methods.setToken = function (purpose) {\n  this.token = uuidv4();\n  this.tokenPurpose = purpose;\n};\n\n/**\r\n * Clear token and token purpose field\r\n */\nuserSchema.methods.clearToken = function () {\n  this.token = undefined;\n  this.tokenPurpose = undefined;\n};\n\n/**\r\n * Determine whether this user has a permission\r\n * based on user role and user's permissions properties\r\n *\r\n * @param {string} permission A permission\r\n * @returns {boolean} true if this user has the given permission.\r\n * Otherwise, false\r\n */\nuserSchema.methods.hasPermission = function (permission, action) {\n  if (this.role === 'admin' || this.role === 'super-admin') {\n    return true;\n  }\n  return !!this.permissions[permission][action];\n};\n\nmodule.exports = mongoose.model('user', userSchema);\n\n//# sourceURL=webpack:///./src/database/models/user.model.js?");

/***/ }),

/***/ "./src/database/seeds/users.js":
/*!*************************************!*\
  !*** ./src/database/seeds/users.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n    usersSeed: [{\n        username: 'superadmin',\n        email: 'superadmin@groom.com',\n        password: '123456',\n        profile: {\n            firstName: 'Superadmin',\n            lastName: 'Account'\n        },\n        role: 'super-admin'\n    }, {\n        username: 'admin',\n        email: 'admin@groom.com',\n        password: '123456',\n        profile: {\n            firstName: 'Admin',\n            lastName: 'Account'\n        },\n        role: 'admin'\n    }, {\n        username: 'contributor',\n        email: 'contributor@groom.com',\n        password: '123456',\n        profile: {\n            firstName: 'Contributor',\n            lastName: 'Account'\n        },\n        role: 'contributor'\n    }, {\n        username: 'shopowner',\n        email: 'shopowner@groom.com',\n        password: '123456',\n        profile: {\n            firstName: 'Shopowner',\n            lastName: 'Account'\n        },\n        role: 'shop-owner'\n    }, {\n        username: 'shopmanager',\n        email: 'shopmanager@groom.com',\n        password: '123456',\n        profile: {\n            firstName: 'Shopmanager',\n            lastName: 'Account'\n        },\n        role: 'shop-manager'\n    }, {\n        username: 'serviceprovider',\n        email: 'serviceprovider@groom.com',\n        password: '123456',\n        profile: {\n            firstName: 'Serviceprovider',\n            lastName: 'Account'\n        },\n        role: 'service-provider'\n    }, {\n        username: 'customer',\n        email: 'customer@groom.com',\n        password: '123456',\n        profile: {\n            firstName: 'Customer',\n            lastName: 'Account'\n        },\n        role: 'customer'\n    }]\n};\n\n//# sourceURL=webpack:///./src/database/seeds/users.js?");

/***/ }),

/***/ "./src/middleware/createAuthenticationStrategy.js":
/*!********************************************************!*\
  !*** ./src/middleware/createAuthenticationStrategy.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar createError = __webpack_require__(/*! http-errors */ \"http-errors\");\nvar passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar createAuthenticationStrategy = function createAuthenticationStrategy(strategy, admin) {\n  return function (req, res, next) {\n    passport.authenticate(strategy, { session: false }, function (err, user, info) {\n      if (err) {\n        return res.format({\n          'application/json': function applicationJson() {\n            return next(createError(500, err));\n          },\n          'text/html': function textHtml() {\n            res.sendFile(path.resolve(CURRENT_WORKING_DIR, './public/assets/pages/html/500.html'));\n          },\n          default: function _default() {\n            return next(createError(500, err));\n          }\n        });\n        // return next(createError(500, err));\n      }\n\n      if (!user) {\n        req.flash('error', info.message);\n        return next(res.redirect('/auth/login'));\n      }\n\n      if (admin === true && !(user.role == 'super-admin' || user.role == 'admin' || user.role == 'contributor')) {\n        req.flash('error', 'This user can\\'t login to admin pannel');\n        return next(res.redirect('/auth/login'));\n      }\n      req.user = user;\n      next();\n    })(req, res, next);\n  };\n};\n\nmodule.exports = createAuthenticationStrategy;\n\n//# sourceURL=webpack:///./src/middleware/createAuthenticationStrategy.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\n// const apiRoutes = require('./api');\nvar viewRoutes = __webpack_require__(/*! ./view */ \"./src/routes/view/index.js\");\n\n// router.use('/api', apiRoutes);\nrouter.use('/', viewRoutes);\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/view/auth.route.js":
/*!***************************************!*\
  !*** ./src/routes/view/auth.route.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar express = __webpack_require__(/*! express */ \"express\");\nvar createAuthenticationStrategy = __webpack_require__(/*! ../../middleware/createAuthenticationStrategy */ \"./src/middleware/createAuthenticationStrategy.js\");\n\nvar router = express.Router();\nvar localAuthenticate = createAuthenticationStrategy('local', true);\n\nvar auth_controller = __webpack_require__(/*! ../../controllers/view/AuthController */ \"./src/controllers/view/AuthController.js\");\n\nrouter.get('/login', function (req, res) {\n  auth_controller.login(req, res);\n});\n\nrouter.post('/login', function (req, res, next) {\n  auth_controller.validateLocalSignInPayload(req, res, next);\n}, function (req, res, next) {\n  localAuthenticate(req, res, next);\n}, function (req, res, next) {\n  auth_controller.localSignIn(req, res, next);\n});\n\n// router.get('/register', function (req, res) {\n//   auth_controller.register(req, res);\n// });\n\n// router.post('/register', function (req, res) {\n//   auth_controller.signUp(req, res);\n// });\n\nrouter.get('/logout', function (req, res) {\n  auth_controller.logout(req, res);\n});\n\n// router.get('/forgot-password', function (req, res) {\n//     auth_controller.showForgotPassword(req, res);\n// });\n\n// router.post('/forgot-password', function (req, res, next) {\n//   auth_controller.forgotPassword(req, res, next);\n// });\n\n// router.get('/verify-email/:token', function (req, res, next) {\n//   auth_controller.verifyEmail(req, res, next);\n// });\n\n// router.get('/reset-password/:token', function (req, res, next) {\n//   auth_controller.showResetPassword(req, res, next);\n// });\n\n// router.post('/reset-password', function (req, res, next) {\n//   auth_controller.resetPassword(req, res, next);\n// });\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/view/auth.route.js?");

/***/ }),

/***/ "./src/routes/view/booking.route.js":
/*!******************************************!*\
  !*** ./src/routes/view/booking.route.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar booking_controller = __webpack_require__(/*! ../../controllers/view/BookingController */ \"./src/controllers/view/BookingController.js\");\n\nrouter.get('/overview', function (req, res) {\n  booking_controller.overview(req, res);\n});\n\nrouter.get('/listing', function (req, res) {\n  booking_controller.listing(req, res);\n});\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/view/booking.route.js?");

/***/ }),

/***/ "./src/routes/view/categories.route.js":
/*!*********************************************!*\
  !*** ./src/routes/view/categories.route.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar categories_controller = __webpack_require__(/*! ../../controllers/view/CategoriesController */ \"./src/controllers/view/CategoriesController.js\");\n\nrouter.get('/manage', function (req, res) {\n  categories_controller.manage(req, res);\n});\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/view/categories.route.js?");

/***/ }),

/***/ "./src/routes/view/dashboard.route.js":
/*!********************************************!*\
  !*** ./src/routes/view/dashboard.route.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar dashboard_controller = __webpack_require__(/*! ../../controllers/view/DashboardController */ \"./src/controllers/view/DashboardController.js\");\n\nrouter.get('/', function (req, res) {\n  dashboard_controller.index(req, res);\n});\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/view/dashboard.route.js?");

/***/ }),

/***/ "./src/routes/view/index.js":
/*!**********************************!*\
  !*** ./src/routes/view/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar dashboardRoutes = __webpack_require__(/*! ./dashboard.route */ \"./src/routes/view/dashboard.route.js\");\nvar authRoutes = __webpack_require__(/*! ./auth.route */ \"./src/routes/view/auth.route.js\");\nvar categoriesRoutes = __webpack_require__(/*! ./categories.route */ \"./src/routes/view/categories.route.js\");\nvar locationsRoutes = __webpack_require__(/*! ./locations.route */ \"./src/routes/view/locations.route.js\");\nvar bookingRoutes = __webpack_require__(/*! ./booking.route */ \"./src/routes/view/booking.route.js\");\n\nrouter.get('/', function (req, res) {\n    res.redirect('/dashboard');\n});\nrouter.use('/dashboard', dashboardRoutes);\nrouter.use('/auth', authRoutes);\nrouter.use('/categories', categoriesRoutes);\nrouter.use('/locations', locationsRoutes);\nrouter.use('/booking', bookingRoutes);\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/view/index.js?");

/***/ }),

/***/ "./src/routes/view/locations.route.js":
/*!********************************************!*\
  !*** ./src/routes/view/locations.route.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar locations_controller = __webpack_require__(/*! ../../controllers/view/LocationsController */ \"./src/controllers/view/LocationsController.js\");\n\nrouter.get('/states', function (req, res) {\n  locations_controller.states(req, res);\n});\n\nrouter.get('/cities', function (req, res) {\n  locations_controller.cities(req, res);\n});\n\nrouter.get('/location406', function (req, res) {\n  locations_controller.location406(req, res);\n});\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/view/locations.route.js?");

/***/ }),

/***/ "./src/views/base.js":
/*!***************************!*\
  !*** ./src/views/base.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar config = __webpack_require__(/*! ../config */ \"./src/config/index.js\");\n\nmodule.exports = function (response, template) {\n    this.response = response;\n    this.template = template;\n};\n\nmodule.exports.prototype = {\n    extend: function extend(properties) {\n        var Child = module.exports;\n        Child.prototype = module.exports.prototype;\n        for (var key in properties) {\n            Child.prototype[key] = properties[key];\n        }\n        return Child;\n    },\n    render: function () {\n        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {\n            return regeneratorRuntime.wrap(function _callee$(_context) {\n                while (1) {\n                    switch (_context.prev = _context.next) {\n                        case 0:\n                            if (this.response && this.template) {\n                                data.config = config;\n                                this.response.render(this.template, data);\n                            }\n\n                        case 1:\n                        case \"end\":\n                            return _context.stop();\n                    }\n                }\n            }, _callee, this);\n        }));\n\n        function render(_x) {\n            return _ref.apply(this, arguments);\n        }\n\n        return render;\n    }(),\n    checkLogin: function checkLogin(session) {\n        if (typeof session.login != \"undefined\") {\n            return session.login;\n        } else {\n            return false;\n        }\n    }\n};\n\n//# sourceURL=webpack:///./src/views/base.js?");

/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi babel-polyfill ./index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! E:\\Projects\\7_Groom\\Groom\\server\\index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./index.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");\n\n//# sourceURL=webpack:///external_%22chalk%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "connect-flash":
/*!********************************!*\
  !*** external "connect-flash" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-flash\");\n\n//# sourceURL=webpack:///external_%22connect-flash%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "errorhandler":
/*!*******************************!*\
  !*** external "errorhandler" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"errorhandler\");\n\n//# sourceURL=webpack:///external_%22errorhandler%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-fileupload\");\n\n//# sourceURL=webpack:///external_%22express-fileupload%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-errors\");\n\n//# sourceURL=webpack:///external_%22http-errors%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ });