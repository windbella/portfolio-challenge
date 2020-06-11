const path = require('path');
const fs = require('fs');

const fileHelper = {
    dirPath: undefined,
    initialize(dirPath) {
        this.dirPath = dirPath;
    },
    save(name, buffer) {
        return new Promise((resolve, reject) => {
            fs.writeFile(path.join(this.dirPath, name), buffer, (err) => {
                if (err) return reject(err);
                return resolve();
            });
        });
    },
    remove(name) {
        return new Promise((resolve, reject) => {
            fs.unlink(path.join(this.dirPath, name), (err) => {
                if (err) return reject(err);
                return resolve();
            });
        });
    },
};

module.exports = fileHelper;
