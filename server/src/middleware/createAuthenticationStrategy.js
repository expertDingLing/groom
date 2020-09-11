const createError = require('http-errors');
const passport = require('passport');

const createAuthenticationStrategy = (strategy, admin) => (req, res, next) => {
  passport.authenticate(strategy, { session: false }, (err, user, info) => {
    if (err) {
      return res.format({
        'application/json': () => next(createError(500, err)),
        'text/html': () => {
          res.sendFile(path.resolve(CURRENT_WORKING_DIR, './public/assets/pages/html/500.html'));
        },
        default: () => next(createError(500, err)),
      });
      // return next(createError(500, err));
    }
    
    if (!user) {
      req.flash('error', info.message);
      return next(res.redirect('/auth/login'));
    }
    
    if( admin === true && !(user.role == 'super-admin' || user.role == 'admin' || user.role == 'contributor') ){
      req.flash('error', 'This user can\'t login to admin pannel');
      return next(res.redirect('/auth/login'));
    }
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = createAuthenticationStrategy;
