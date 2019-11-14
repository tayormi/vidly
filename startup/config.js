const config = require('config');

module.exports = function() {
    if (!config.get('jwtPrivateKey')) {
        // console.error('Fatal ERROR: jwtPrivateKey is not defined.');
        // process.exit(1);
        throw new Error('Fatal ERROR: jwtPrivateKey is not defined.');
    }
}