const BaseController = require('./BaseController');
const View = require('../../views/base');

module.exports = BaseController.extend({
  name: 'DashboardController',
  
  index: function(req,res) {
      let v;
      if (!this.isLogin(req)) {
          req.session.redirectTo = '/';
          return res.redirect('/auth/login');
      }

      v = new View(res, 'pages/dashboard');
      v.render({
          title: 'Dashboard',
          session:req.session
      });
  },
});

