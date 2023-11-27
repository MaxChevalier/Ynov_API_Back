const Bouquet = require('../models/bouquet');
const logger = require('../logger');

exports.createBouquet = (req, res, next) => {
    const bouquet = new Bouquet({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        flowers: req.body.flowers,
        shop: req.body.shop,
        creationDate: new Date(),
        creationUser: req.userData.userId,
        modificationDate: new Date(),
        modificationUser: req.userData.userId,
        active: true
    });
    bouquet.save().then(createdBouquet => {
        logger.info('BouquetController::createBouquet::success', createdBouquet);
        res.status(201).json({
            message: 'Bouquet added successfully',
            bouquetId: createdBouquet._id
        });
    }).catch(error => {
        logger.error('BouquetController::createBouquet::error', error);
        res.status(500).json({
            message: 'Creating a bouquet failed!'
        });
    });
}

exports.updateBouquet = (req, res, next) => {
    const bouquet = new Bouquet({
        _id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        flowers: req.body.flowers,
        shop: req.body.shop,
        modificationDate: new Date(),
        modificationUser: req.userData.userId,
        active: req.body.active
    });
    Bouquet.updateOne({_id: req.params.id}, bouquet).then(result => {
        logger.info('BouquetController::updateBouquet::success', result);
        res.status(200).json({message: "Update successful!"});
    }).catch(error => {
        logger.error('BouquetController::updateBouquet::error', error);
        res.status(500).json({
            message: "Couldn't update bouquet!"
        });
    });
}

exports.getBouquet = (req, res, next) => {
    Bouquet.findById(req.params.id).then(bouquet => {
        if (bouquet) {
            logger.info('BouquetController::getBouquet::success', bouquet);
            res.status(200).json(bouquet);
        } else {
            logger.error('BouquetController::getBouquet::error', 'Bouquet not found');
            res.status(404).json({message: 'Bouquet not found!'});
        }
    }).catch(error => {
        logger.error('BouquetController::getBouquet::error', error);
        res.status(500).json({
            message: "Fetching bouquet failed!"
        });
    });
}

exports.deleteBouquet = (req, res, next) => {
    Bouquet.deleteOne({_id: req.params.id}).then(result => {
        logger.info('BouquetController::deleteBouquet::success', result);
        res.status(200).json({message: 'Bouquet deleted!'});
    }).catch(error => {
        logger.error('BouquetController::deleteBouquet::error', error);
        res.status(500).json({
            message: "Deleting bouquet failed!"
        });
    });
}

exports.getBouquets = (req, res, next) => {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const bouquetQuery = Bouquet.find();
    let fetchedBouquets;
    if (pageSize && currentPage) {
        bouquetQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
    }
    bouquetQuery.then(documents => {
        fetchedBouquets = documents;
        return Bouquet.count();
    }).then(count => {
        logger.info('BouquetController::getBouquets::success', fetchedBouquets);
        res.status(200).json({
            message: 'Bouquets fetched successfully!',
            bouquets: fetchedBouquets,
            maxBouquets: count
        });
    }).catch(error => {
        logger.error('BouquetController::getBouquets::error', error);
        res.status(500).json({
            message: "Fetching bouquets failed!"
        });
    });
}

exports.getBouquetsByShop = (req, res, next) => {
    Bouquet.find({shop: req.params.id}).then(documents => {
        logger.info('BouquetController::getBouquetsByShop::success', documents);
        res.status(200).json({
            message: 'Bouquets fetched successfully!',
            bouquets: documents
        });
    }).catch(error => {
        logger.error('BouquetController::getBouquetsByShop::error', error);
        res.status(500).json({
            message: "Fetching bouquets failed!"
        });
    });
}