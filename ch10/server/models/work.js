const dbHelper = require('../utilities/db-helper');

class Work {
    constructor(id, content) {
        this.id = id;
        this.content = content;
    }

    static async create(content) {
        const result = await dbHelper.create([{ name: 'content', value: JSON.stringify(content) }], Work.schema);
        return new Work(result.lastID, content);
    }

    static async findAll() {
        const rows = await dbHelper.find('', Work.schema);
        return rows.map((row) => new Work(row.id, JSON.parse(row.content)));
    }

    static async findById(id) {
        const rows = await dbHelper.find(`id = ${id}`, Work.schema);
        return rows.map((row) => new Work(row.id, JSON.parse(row.content)))[0];
    }

    static async updateById(id, content) {
        const result = await dbHelper.update([{ name: 'content', value: JSON.stringify(content) }], `id = ${id}`, Work.schema);
        return result;
    }

    static async deleteById(id) {
        const result = await dbHelper.delete(`id = ${id}`, Work.schema);
        return result;
    }

    update(content) {
        Work.updateById(this.id, content);
    }

    delete() {
        Work.deleteById(this.id);
    }
}

Work.schema = {
    tableName: 'work',
    columns: [
        {
            name: 'id',
            type: 'INTEGER',
            isPrimaryKey: true,
            isAutoincrement: true,
        },
        { name: 'content', type: 'TEXT', isNotNull: true },
    ],
};

module.exports = Work;
