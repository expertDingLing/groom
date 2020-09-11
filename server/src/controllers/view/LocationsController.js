const BaseController = require('./BaseController');
const View = require('../../views/base');

module.exports = BaseController.extend({
  name: 'LocationsController',
  
  states: function(req,res) {
      let v;
      if (!this.isLogin(req)) {
          req.session.redirectTo = '/';
          return res.redirect('/auth/login');
      }

      v = new View(res, 'pages/locations/states');
      v.render({
          title: 'State List',
          path: 'Locations / States',
          session:req.session
      });
  },

  cities: function(req,res) {
    let v;
    if (!this.isLogin(req)) {
        req.session.redirectTo = '/';
        return res.redirect('/auth/login');
    }

    v = new View(res, 'pages/locations/cities');
    v.render({
        title: 'City List',
        path: 'Locations / Cities',
        session:req.session
    });
  },

  location406: function(req,res) {
    let v;
    if (!this.isLogin(req)) {
        req.session.redirectTo = '/';
        return res.redirect('/auth/login');
    }

    v = new View(res, 'pages/locations/location406');
    v.render({
        title: 'Locations (406)',
        path: 'Locations / Locations (406)',
        session:req.session
    });
  },
});

