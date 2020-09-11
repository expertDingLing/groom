const express = require('express');
const createAuthenticationStrategy = require('../../middleware/createAuthenticationStrategy');

const router = express.Router();
const localAuthenticate = createAuthenticationStrategy('local', true);

const auth_controller = require('../../controllers/view/AuthController');

router.get('/login', function (req, res) {
  auth_controller.login(req, res);
});

router.post(
  '/login',
  function(req, res, next){
    auth_controller.validateLocalSignInPayload(req, res, next);
  },
  function(req, res, next){
    localAuthenticate(req, res, next);
  },
  function(req, res, next){
    auth_controller.localSignIn(req, res, next);
  }
);

// router.get('/register', function (req, res) {
//   auth_controller.register(req, res);
// });

// router.post('/register', function (req, res) {
//   auth_controller.signUp(req, res);
// });

router.get('/logout', function (req, res) {
  auth_controller.logout(req, res);
});

// router.get('/forgot-password', function (req, res) {
//     auth_controller.showForgotPassword(req, res);
// });

// router.post('/forgot-password', function (req, res, next) {
//   auth_controller.forgotPassword(req, res, next);
// });

// router.get('/verify-email/:token', function (req, res, next) {
//   auth_controller.verifyEmail(req, res, next);
// });

// router.get('/reset-password/:token', function (req, res, next) {
//   auth_controller.showResetPassword(req, res, next);
// });

// router.post('/reset-password', function (req, res, next) {
//   auth_controller.resetPassword(req, res, next);
// });

module.exports = router;
