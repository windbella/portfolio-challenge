const createWork = (req, res) => {
    res.sendStatus(200);
};

const readWork = (req, res) => {
    res.send({ id: req.params.id });
};

const readWorks = (req, res) => {
    res.send({ list: [] });
};

const updateWork = (req, res) => {
    res.sendStatus(200);
};

const deleteWork = (req, res) => {
    res.sendStatus(200);
};

module.exports = {
    createWork,
    readWork,
    readWorks,
    updateWork,
    deleteWork,
};
