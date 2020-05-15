class File {
    constructor(name) {
        this.name = name;
        console.log('File.constructor', this.name);
    }

    static create(name) {
        console.log('File.create', name);
        return { name };
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

File.schema = {
    tableName: 'file',
    columns: [
        { name: 'name', type: 'TEXT', isPrimaryKey: true },
        { name: 'size', type: 'INTEGER' },
    ],
};

module.exports = File;
