const express = require('express');
const work = require('./work');

const router = express.Router();

router.use('/work', work);

module.exports = router;
