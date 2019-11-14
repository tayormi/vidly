const logger = require('../common/logger');
const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect('mongodb://localhost/vidly', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => logger.info('Connected to MongoDb'));
}