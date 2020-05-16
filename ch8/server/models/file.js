const dbHelper = require('../utilities/db-helper');
const fileHelper = require('../utilities/file-helper');

class File {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }

    static async create(name, buffer) {
        await dbHelper.create([{ name: 'name', value: name }, { name: 'size', value: buffer.length }], File.schema);
        await fileHelper.save(name, buffer);
        return new File(name, buffer.length);
    }

    static async findByName(name) {
        const rows = await dbHelper.find(`name = '${name}'`, File.schema);
        return rows.map((row) => new File(row.name, row.size))[0];
    }

    static async updateByName(name, buffer) {
        const result = await dbHelper.update([{ name: 'size', value: buffer.length }], `name = '${name}'`, File.schema);
        await fileHelper.save(name, buffer);
        return result;
    }

    static async deleteByName(name) {
        const result = await dbHelper.delete(`name = '${name}'`, File.schema);
        await fileHelper.remove(name);
        return result;
    }

    update() {
        File.updateByName(this.name, this.size);
    }

    delete() {
        File.deleteByName(this.name);
    }
}

File.schema = {
    tableName: 'file',
    columns: [
        { name: 'name', type: 'TEXT', isPrimaryKey: true },
        { name: 'size', type: 'INTEGER', isNotNull: true },
    ],
};

module.exports = File;
