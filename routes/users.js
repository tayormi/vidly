const { User, validateUser } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    const users = await User.find().sort('name');
    res.send(users);
});

router.post('/', async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = new Genre({
        name: req.body.name
    });
    await user.save()
    res.send(user);
});

// router.put('/:id', async (req, res) => {
//     const { error } = validateGenre(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//     const genre = await User.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
//         new: true
//     })

//     if (!genre) return res.status(404).send('The genre with the given ID was not found.');

//     res.send(genre);
// });

// router.delete('/:id', async (req, res) => {
//     const genre = Genre.findByIdAndRemove(req.params.id);
//     if (!genre) return res.status(404).send('The genre with the given ID was not found.');

//     res.send(genre);
// });

// router.get('/:id', async (req, res) => {
//     const genre = await Genre.findById(req.params.id)
//     if (!genre) return res.status(404).send('The genre with the given ID was not found.');
//     res.send(genre);
// });


module.exports = router;