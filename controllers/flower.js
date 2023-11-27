const Flower = require('../models/flower');
const logger = require('../logger');

exports.createFlower = (req, res, next) => {
    const flower = new Flower({
        name: req.body.name,
        description: req.body.description,
        trefle_id: req.body.trefle_id,
        creationDate: new Date(),
        creationUser: req.userData.userId,
        modificationDate: new Date(),
        modificationUser: req.userData.userId,
        active: true
    });

    flower.save().then(result => {
        logger.info('FlowerController::createFlower::success', result);
        res.status(201).json({
            message: 'Flower added successfully',
            flowerId: result._id
        });
    }).catch(error => {
        logger.error('FlowerController::createFlower::error', error);
        res.status(500).json({
            message: 'Creating a flower failed!'
        });
    });
}

exports.updateFlower = (req, res, next) => {
    const flower = new Flower({
        _id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        trefle_id: req.body.trefle_id,
        modificationDate: new Date(),
        modificationUser: req.userData.userId,
        active: true
    });

    Flower.updateOne({_id: req.params.id}, flower).then(result => {
        logger.info('FlowerController::updateFlower::success', result);
        res.status(200).json({message: 'Update successful!'});
    }).catch(error => {
        logger.error('FlowerController::updateFlower::error', error);
        res.status(500).json({
            message: 'Could not update flower!'
        });
    });
}

exports.getFlowers = (req, res, next) => {
    Flower.find().then(documents => {
        logger.info('FlowerController::getFlowers::success', documents);
        res.status(200).json({
            message: 'Flowers fetched successfully!',
            flowers: documents
        });
    }).catch(error => {
        logger.error('FlowerController::getFlowers::error', error);
        res.status(500).json({
            message: 'Fetching flowers failed!'
        });
    });
}

exports.getFlower = (req, res, next) => {
    Flower.findById(req.params.id).then(flower => {
        if (flower) {
            logger.info('FlowerController::getFlower::success', flower);
            res.status(200).json(flower);
        } else {
            logger.error('FlowerController::getFlower::error', 'Flower not found');
            res.status(404).json({message: 'Flower not found!'});
        }
    }).catch(error => {
        logger.error('FlowerController::getFlower::error', error);
        res.status(500).json({
            message: 'Fetching flower failed!'
        });
    });
}

exports.deleteFlower = (req, res, next) => {
    Flower.deleteOne({_id: req.params.id}).then(result => {
        logger.info('FlowerController::deleteFlower::success', result);
        res.status(200).json({message: 'Flower deleted!'});
    }).catch(error => {
        logger.error('FlowerController::deleteFlower::error', error);
        res.status(500).json({
            message: 'Deleting flower failed!'
        });
    });
}