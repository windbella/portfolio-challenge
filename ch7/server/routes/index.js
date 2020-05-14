const express = require('express');
const path = require('path');
const api = require('./api');

const router = express.Router();

router.use('/api/v1', api);

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

module.exports = router;
