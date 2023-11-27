const Shop = require('../models/shop');
const logger = require('../logger');

exports.createShop = (req, res, next) => {
    logger.info('Creating shop');
    const shop = new Shop({
        name: req.body.name,
        description: req.body.description,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        openingHours: req.body.openingHours,
        workers: req.body.workers,
        creationDate: new Date(),
        creationUser: req.userData.userId,
        modificationDate: new Date(),
        modificationUser: req.userData.userId,
        active: true
    });
    shop.save().then(createdShop => {
        logger.info('ShopController::createShop::success', createdShop);
        res.status(201).json({
            message: 'Shop added successfully',
            shop: {
                ...createdShop,
                id: createdShop._id
            }
        });
    }).catch(error => {
        logger.error('ShopController::createShop::error', error);
        res.status(500).json({
            message: 'Creating a shop failed'
        });
    });
}

exports.updateShop = (req, res, next) => {
    logger.info('Updating shop');
    const shop = new Shop({
        _id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        openingHours: req.body.openingHours,
        workers: req.body.workers,
        modificationDate: new Date(),
        modificationUser: req.userData.userId,
        active: req.body.active
    });
    Shop.updateOne({_id: req.params.id}, shop).then(result => {
        logger.info('ShopController::updateShop::success', result);
        res.status(200).json({
            message: 'Shop updated successfully'
        });
    }).catch(error => {
        logger.error('ShopController::updateShop::error', error);
        res.status(500).json({
            message: 'Updating a shop failed'
        });
    });
}

exports.getShop = (req, res, next) => {
    logger.info('Getting shop');
    Shop.findById(req.params.id).then(shop => {
        if (shop) {
            logger.info('ShopController::getShop::success', shop);
            res.status(200).json(shop);
        } else {
            logger.error('ShopController::getShop::error', 'Shop not found');
            res.status(404).json({message: 'Shop not found'});
        }
    }).catch(error => {
        logger.error('ShopController::getShop::error', error);
        res.status(500).json({
            message: 'Fetching shop failed'
        });
    });
}

exports.getShops = (req, res, next) => {
    logger.info('Getting shops');
    const pageSize = +req.query.pageSize;
    const currentPage = +req.query.page;
    const shopQuery = Shop.find();
    let fetchedShops;
    if (pageSize && currentPage) {
        shopQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
    }
    shopQuery.then(documents => {
        fetchedShops = documents;
        return Shop.count();
    }).then(count => {
        logger.info('ShopController::getShops::success', fetchedShops);
        res.status(200).json({
            message: 'Shops fetched successfully',
            shops: fetchedShops,
            maxShops: count
        });
    }).catch(error => {
        logger.error('ShopController::getShops::error', error);
        res.status(500).json({
            message: 'Fetching shops failed'
        });
    });
}

exports.deleteShop = (req, res, next) => {
    logger.info('Deleting shop');
    Shop.deleteOne({_id: req.params.id}).then(result => {
        logger.info('ShopController::deleteShop::success', result);
        res.status(200).json({message: 'Shop deleted'});
    }).catch(error => {
        logger.error('ShopController::deleteShop::error', error);
        res.status(500).json({
            message: 'Deleting shop failed'
        });
    });
}