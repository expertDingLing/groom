const express = require('express');

const router = express.Router();

// const apiRoutes = require('./api');
const viewRoutes = require('./view');

// router.use('/api', apiRoutes);
router.use('/', viewRoutes);

module.exports = router;
