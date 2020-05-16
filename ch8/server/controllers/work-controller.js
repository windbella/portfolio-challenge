const Work = require('../models/work');

const createWork = async (req, res) => {
    try {
        const work = await Work.create(req.body);
        res.send(work);
    } catch (e) {
        res.sendStatus(500);
    }
};

const readWork = async (req, res) => {
    try {
        const work = await Work.findById(req.params.id);
        res.send(work);
    } catch (e) {
        res.sendStatus(500);
    }
};

const readWorks = async (_, res) => {
    try {
        const works = await Work.findAll();
        res.send(works);
    } catch (e) {
        res.sendStatus(500);
    }
};

const updateWork = async (req, res) => {
    try {
        await Work.updateById(req.params.id, req.body);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
};

const deleteWork = async (req, res) => {
    try {
        await Work.deleteById(req.params.id);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
};

module.exports = {
    createWork,
    readWork,
    readWorks,
    updateWork,
    deleteWork,
};
