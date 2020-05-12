const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    res.send({ description: 'CREATE' });
});

router.put('/', (req, res) => {
    res.send({ description: 'UPDATE' });
});

router.get('/', (req, res) => {
    res.send({ description: 'READ' });
});

router.delete('/', (req, res) => {
    res.send({ description: 'DELETE' });
});

module.exports = router;
