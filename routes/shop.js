const express = require('express');
const router = express.Router(); // router intégré au framework Express
const shopController = require('../controllers/shop');

const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');

// Routes CRUD

// Create
router.post('/', auth, logger, shopController.createShop);

// Read
router.get('/:id', logger, shopController.getShop);
router.get('/', logger, shopController.getShops);

// Update
router.put('/:id', auth, logger, shopController.updateShop);

// Delete
router.delete('/:id', auth, logger, shopController.deleteShop);

module.exports = router;