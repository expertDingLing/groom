const BaseController = require('./BaseController');
const View = require('../../views/base');

module.exports = BaseController.extend({
  name: 'CategoriesController',
  
  manage: function(req,res) {
      let v;
      if (!this.isLogin(req)) {
          req.session.redirectTo = '/';
          return res.redirect('/auth/login');
      }

      v = new View(res, 'pages/categories/manage');
      v.render({
          title: 'Categories',
          path: 'Categories / Manage Categories',
          session:req.session
      });
  },
});

