const logger = require('../common/logger');


module.exports = function(err, res, res, next){
    
    // Log errors
    logger.info(err.message, err);
    
    res.status(500).send('Something failed');
}