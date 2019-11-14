const { createLogger, transports } = require('winston');
require('winston-mongodb');

const logger = createLogger({
    transports: [
        new transports.Console({ colorize: true, prettyPrint: true}),
        new transports.File({ filename: 'logfile.log' }),
        new transports.MongoDB({ db: 'mongodb://localhost/vidly', level: 'error' })
      ],
    exceptionHandlers: [
        new transports.File({ filename: 'exceptions.log' })
    ]
});

module.exports = logger;