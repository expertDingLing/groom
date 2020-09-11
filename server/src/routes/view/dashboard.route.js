const express = require('express');

const router = express.Router();

const dashboard_controller = require('../../controllers/view/DashboardController');

router.get('/', function(req, res) {
  dashboard_controller.index(req, res);
});

module.exports = router;
