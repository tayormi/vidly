const Joi = require('joi');
const mongoose = require('mongoose');


const genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});

const Genre = new mongoose.model('Genre', genreSchema);
function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);
}
exports.Genre = Genre;
exports.validateGenre = validateGenre;
exports.genreSchema = genreSchema;