const winston = require('winston');

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({ format: 'DD/MM/YYYY-HH:mm:ss' }),
        winston.format.printf(({ level, message, timestamp }) => {
            return `[${level}] - ${timestamp} : ${message}`;
        }),
    ),
    transports: [
        new winston.transports.File({ filename: 'log/debug.log' }),
        new winston.transports.File({ filename: 'log/info.log', level: 'info'}),
        new winston.transports.File({ filename: 'log/warn.log', level: 'warn'}),
        new winston.transports.File({ filename: 'log/error.log', level: 'error'}),
    ]
});

module.exports = logger;