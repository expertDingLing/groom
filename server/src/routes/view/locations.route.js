const express = require('express');

const router = express.Router();

const locations_controller = require('../../controllers/view/LocationsController');

router.get('/states', function(req, res) {
  locations_controller.states(req, res);
});

router.get('/cities', function(req, res) {
  locations_controller.cities(req, res);
});

router.get('/location406', function(req, res) {
  locations_controller.location406(req, res);
});

module.exports = router;
