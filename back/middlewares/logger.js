const winston = require('winston');


const logger = (req, res, next) => { // next() sert à passer le relai aux autres middlewares et fonctions.
    try {
        const log = winston.createLogger({
            level: 'info',
            format: winston.format.simple(),
            transports: [
                new winston.transports.Console(),
            ]
        });


        log.info("MIDDLEWARE");
        next();
    } catch {
        res.status(501).json({ message: 'Erreur au niveau du logger' })
    }
}

module.exports = logger;