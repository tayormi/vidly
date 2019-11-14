const { createLogger, transports } = require('winston');

const logger = createLogger({
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'logfile.log' }),
        new transports.MongoDB({ db: 'mongodb://localhost/vidly', level: 'error' })
      ]
});

module.exports = logger;