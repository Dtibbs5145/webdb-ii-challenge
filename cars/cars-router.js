const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig');

router.get('/', async (req, res) => {
    try {
        const cars = await db('cars');
        res.status(200).json(cars);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error getting the cars' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const cars = await db('cars').where({ id });
        if (cars) {
            res.status(200).json(cars);
        } else {
            res.status(404).json({ message: 'That car cannot be found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error finding this car' });
    }
});

router.post('/', async (req, res) => {
    try {
        const car = req.body;
        const [id] = await db('cars').insert(car);
        const newCar = await db('cars').where({ id });
        res.status(200).json(newCar);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong when trying to add car' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const count = await db('cars').del().where({ id });
        if (count > 0) {
            res.status(200).json({ message: 'This car was successfully deleted' });
        } else {
            res.status(404).json({ message: 'This car could not be found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'There was an error while trying to remove car' });
    }
});


module.exports = router;