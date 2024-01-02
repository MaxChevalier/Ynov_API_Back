const express = require('express');
const router = express.Router(); // router intégré au framework Express
const bouquetController = require('../controllers/bouquet');

const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');

// Routes CRUD

// Create
router.post('/', auth, logger, bouquetController.createBouquet);

// Read
router.get('/:id', logger, bouquetController.getBouquet);
router.get('/', logger, bouquetController.getBouquets);

// Update
router.put('/:id', auth, logger, bouquetController.updateBouquet);

// Delete
router.delete('/:id', auth, logger, bouquetController.deleteBouquet);

module.exports = router;