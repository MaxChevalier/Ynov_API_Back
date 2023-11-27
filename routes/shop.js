const express = require('express');
const router = express.Router(); // router intégré au framework Express
const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');
const shopController = require('../controllers/shop');

const BASE_URL = '/shops';

router.get(BASE_URL + '/:id', [logger], shopController.getShop); // GET = READ = LECTURE
router.get(BASE_URL + '/', [logger], shopController.getShops);

router.post(BASE_URL + '/', [logger, auth], shopController.createShop); // POST = CREATE = CREATION
router.put(BASE_URL + '/:id', [logger, auth], shopController.updateShop); // PUT = UPDATE = MODIFICATION
router.delete(BASE_URL + '/:id', [logger, auth], shopController.deleteShop); // DELETE = DELETE = SUPPRESSION

module.exports = router;