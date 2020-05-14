const express = require('express');
const workController = require('../../controllers/work-controller');
const fileController = require('../../controllers/file-controller');

const router = express.Router();

router.post('/works', workController.createWork);
router.get('/works/:id', workController.readWork);
router.get('/works', workController.readWorks);
router.put('/works/:id', workController.updateWork);
router.delete('/works/:id', workController.deleteWork);

router.post('/files/:name', fileController.createFile);
router.get('/files/:name', fileController.readFile);
router.put('/files/:name', fileController.updateFile);
router.delete('/files/:name', fileController.deleteFile);

module.exports = router;
