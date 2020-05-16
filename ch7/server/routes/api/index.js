const express = require('express');
const multer = require('multer');
const workController = require('../../controllers/work-controller');
const fileController = require('../../controllers/file-controller');

const router = express.Router();
const upload = multer();

router.post('/works', workController.createWork);
router.get('/works/:id', workController.readWork);
router.get('/works', workController.readWorks);
router.put('/works/:id', workController.updateWork);
router.delete('/works/:id', workController.deleteWork);

router.post('/files/:name', upload.any(), fileController.createFile);
router.get('/files/:name', fileController.readFile);
router.put('/files/:name', upload.any(), fileController.updateFile);
router.delete('/files/:name', fileController.deleteFile);

module.exports = router;
