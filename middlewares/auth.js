const jwt = require('jsonwebtoken');
const User = require('../models/user');
const logger = require('../logger');

module.exports = (req, res, next) => {
    try {
        const token =  req.headers.authorization;
        const decodeToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');

        User.findOne({ email: decodeToken.user.email}).then((user) => {
            logger.info({message: user.name + ' fait une requête'});
            next();
        }).catch((err) => {
            logger.error({message: err.toString()})
            res.status(403).json({ "message": "UNAUTHORIZED - 1" })
        });
    } catch (err) {
        res.status(403).json({ "message": "UNAUTHORIZED - 0" })
    }
}