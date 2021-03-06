const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../config');

const User = mongoose.model('user');

// Create local strategy
const localStrategy = new LocalStrategy(
  {
    usernameField: 'usernameOrEmail',
    passwordField: 'password',
  },
  function (usernameOrEmail, password, done) {
    User.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    })
      .then((user) => {
        if (!user) {
          return done(null, false, {
            message: 'Username or email does not exist',
          });
        } 
     
        user.comparePasswordAsync(password).then((isMatch) => {
          if (!isMatch) {
            return done(null, false, { message: 'Password is incorrect' });
          }

          if (config.auth.verifyEmail) {
            if (user.status === 'unverified-email') {
              return done(null, false, { message: 'Email is not verified' });
            }
          }

          return done(null, user);
        });
      })
      .catch(done);
  }
);

// Create jwt strategy
const jwtStrategy = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt.secret,
  },
  function (jwtPayload, done) {
    User.findById(jwtPayload.userId)
      .then((user) => {
        if (!user) {
          return done(null, false, { message: 'Invalid credentials' });
        }

        if (user.status !== 'active') {
          return done(null, false, {
            message: 'Disabled or unverified account',
          });
        }

        if (user._id !== jwtPayload.userId) {
          return done(null, false, { message: 'Invalid JWT token' });
        }

        return done(null, user);
      })
      .catch(done);
  }
);

passport.use(localStrategy);
passport.use(jwtStrategy);

module.exports = passport;
