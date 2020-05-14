const Work = require('../models/work');

const createWork = (req, res) => {
    res.send(new Work());
};

const readWork = (req, res) => {
    res.send(Work.findById(req.params.id));
};

const readWorks = (req, res) => {
    res.send(Work.findAll());
};

const updateWork = (req, res) => {
    Work.updateById(req.params.id);
    res.sendStatus(200);
};

const deleteWork = (req, res) => {
    Work.deleteById(req.params.id);
    res.sendStatus(200);
};

module.exports = {
    createWork,
    readWork,
    readWorks,
    updateWork,
    deleteWork,
};
