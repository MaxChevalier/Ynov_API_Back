const express = require('express');
const router = express.Router(); // router intégré au framework Express
const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');
const flowerController = require('../controllers/flower');

const BASE_URL = '/flowers';

// Routes CRUD
router.get(BASE_URL + '/:id', [logger], flowerController.getFlower); // GET = READ = LECTURE
router.get(BASE_URL + '/', [logger], flowerController.getFlowers);

router.post(BASE_URL + '/', [logger, auth], flowerController.createFlower); // POST = CREATE = CREATION
router.put(BASE_URL + '/:id', [logger, auth], flowerController.updateFlower); // PUT = UPDATE = MODIFICATION
router.delete(BASE_URL + '/:id', [logger, auth], flowerController.deleteFlower); // DELETE = DELETE = SUPPRESSION


module.exports = router;