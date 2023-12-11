const express = require('express');
const router = express.Router(); // router intégré au framework Express
const flowerController = require('../controllers/flower');

const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');

// Routes CRUD

// Create
router.post('/', auth, logger, flowerController.createFlower);

// Read
router.get('/:id', logger, flowerController.getFlower);
router.get('/', logger, flowerController.getFlowers);

// Update
router.put('/:id', auth, logger, flowerController.updateFlower);

// Delete
router.delete('/:id', auth, logger, flowerController.deleteFlower);

module.exports = router;