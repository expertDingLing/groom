const express = require('express');

const router = express.Router();

const categories_controller = require('../../controllers/view/CategoriesController');

router.get('/manage', function(req, res) {
  categories_controller.manage(req, res);
});

module.exports = router;
