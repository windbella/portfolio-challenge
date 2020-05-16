const File = require('../models/file');

const createFile = async (req, res) => {
    try {
        const file = await File.create(req.params.name, 100);
        res.send(file);
    } catch (e) {
        res.sendStatus(500);
    }
};

const readFile = async (req, res) => {
    try {
        const file = await File.findByName(req.params.name);
        res.send(file);
    } catch (e) {
        res.sendStatus(500);
    }
};

const updateFile = async (req, res) => {
    try {
        await File.updateByName(req.params.name, 200);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
};

const deleteFile = async (req, res) => {
    try {
        await File.deleteByName(req.params.name);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
};

module.exports = {
    createFile,
    readFile,
    updateFile,
    deleteFile,
};
