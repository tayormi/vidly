
require('express-async-errors');
require('winston');
const logger = require('../common/logger');


module.exports = function() {
    process.on('uncaughtException', (ex) => {
        logger.error(ex.message, ex);
        process.exit(1);
    })
    process.on('unhandledRejection', (ex) => {
        logger.error(ex.message, ex);
        process.exit(1);
    })
}