const dbHelper = require('../utilities/db-helper');

class File {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }

    static async create(name, size) {
        await dbHelper.create([{ name: 'name', value: name }, { name: 'size', value: size }], File.schema);
        return new File(name, size);
    }

    static async findByName(name) {
        const rows = await dbHelper.find(`name = '${name}'`, File.schema);
        return rows.map((row) => new File(row.name, row.size))[0];
    }

    static async updateByName(name, size) {
        const result = await dbHelper.update([{ name: 'size', value: size }], `name = '${name}'`, File.schema);
        return result;
    }

    static async deleteByName(name) {
        const result = await dbHelper.delete(`name = '${name}'`, File.schema);
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
