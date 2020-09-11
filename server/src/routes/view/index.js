const express = require('express');

const router = express.Router();

const dashboardRoutes = require('./dashboard.route');
const authRoutes = require('./auth.route');
const categoriesRoutes = require('./categories.route');
const locationsRoutes = require('./locations.route');
const bookingRoutes = require('./booking.route');

router.get('/', function(req, res) {
    res.redirect('/dashboard');
  });
router.use('/dashboard', dashboardRoutes);
router.use('/auth', authRoutes);
router.use('/categories', categoriesRoutes);
router.use('/locations', locationsRoutes);
router.use('/booking', bookingRoutes);

module.exports = router;
