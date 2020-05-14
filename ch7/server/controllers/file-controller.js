const createFile = (req, res) => {
    res.sendStatus(200);
};

const readFile = (req, res) => {
    res.send({ name: req.params.name });
};

const updateFile = (req, res) => {
    res.sendStatus(200);
};

const deleteFile = (req, res) => {
    res.sendStatus(200);
};

module.exports = {
    createFile,
    readFile,
    updateFile,
    deleteFile,
};
