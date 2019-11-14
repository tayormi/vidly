const winston = require('winston');
const expressWinson = require('express-winston');
require('express-async-errors');
const error = require('./middleware/error');
const config = require('config')
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const genres = require('./routes/genres');
const users = require('./routes/users')
const auth = require('./routes/auth')
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const express = require('express');
const app = express();


if (!config.get('jwtPrivateKey')) {
    console.error('Fatal ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}
mongoose.connect('mongodb://localhost/vidly', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDb...'))
    .catch(err => console.err('Error connecting to MongoDb'))

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use(error);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));