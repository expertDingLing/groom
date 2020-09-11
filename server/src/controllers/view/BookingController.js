const BaseController = require('./BaseController');
const View = require('../../views/base');

module.exports = BaseController.extend({
  name: 'BookingController',
  
  overview: function(req,res) {
      let v;
      if (!this.isLogin(req)) {
          req.session.redirectTo = '/';
          return res.redirect('/auth/login');
      }

      v = new View(res, 'pages/booking/overview');
      v.render({
          title: 'Calendar Overview',
          path: 'Booking / Overview',
          session:req.session
      });
  },

  listing: function(req,res) {
    let v;
    if (!this.isLogin(req)) {
        req.session.redirectTo = '/';
        return res.redirect('/auth/login');
    }

    v = new View(res, 'pages/booking/listing');
    v.render({
        title: 'Booking Listing',
        path: 'Booking / Listing',
        session:req.session
    });
},
});

