const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    res.sendStatus(200);
});

router.put('/', (req, res) => {
    res.sendStatus(200);
});

router.get('/', (req, res) => {
    res.send({ list: [] });
});

router.get('/:id', (req, res) => {
    res.send({ id: req.params.id });
});

router.delete('/', (req, res) => {
    res.sendStatus(200);
});

module.exports = router;
