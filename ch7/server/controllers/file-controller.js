const File = require('../models/file');

const createFile = (req, res) => {
    res.send(new File(req.params.name));
};

const readFile = (req, res) => {
    res.send(File.findByName(req.params.name));
};

const updateFile = (req, res) => {
    File.updateByName(req.params.name);
    res.sendStatus(200);
};

const deleteFile = (req, res) => {
    File.deleteByName(req.params.name);
    res.sendStatus(200);
};

module.exports = {
    createFile,
    readFile,
    updateFile,
    deleteFile,
};
