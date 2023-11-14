const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusController');
const dataController = require('../controllers/dataController');

router.get('/status', statusController.getStatus);
router.post('/data', dataController.addData);
router.get('/data', dataController.getData);

module.exports = router;
