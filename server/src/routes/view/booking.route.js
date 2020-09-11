const express = require('express');

const router = express.Router();

const booking_controller = require('../../controllers/view/BookingController');

router.get('/overview', function(req, res) {
  booking_controller.overview(req, res);
});

router.get('/listing', function(req, res) {
  booking_controller.listing(req, res);
});

module.exports = router;
