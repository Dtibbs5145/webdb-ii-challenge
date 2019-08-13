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

module.exports = router;