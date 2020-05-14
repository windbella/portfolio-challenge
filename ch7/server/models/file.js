class File {
    constructor(name) {
        this.name = name;
        console.log('File.constructor', this.name);
    }

    static findByName(name) {
        console.log('File.findByName', name);
        return { name };
    }

    static updateByName(name) {
        console.log('File.updateByName', name);
    }

    static deleteByName(name) {
        console.log('File.deleteByName', name);
    }

    update() {
        File.updateByName(this.name);
    }

    delete() {
        File.deleteByName(this.name);
    }
}

module.exports = File;