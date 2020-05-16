const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(path.join(__dirname, '../data/db/portfolio.db'));

const dbHelper = {
    initialize(...schemas) {
        const sqls = schemas.map((schema) => {
            const { tableName } = schema;
            const columns = schema.columns.map((column) => `${column.name} ${column.type}${column.isPrimaryKey ? ' PRIMARY KEY' : ''}${column.isAutoincrement ? ' AUTOINCREMENT' : ''}${column.isNotNull ? ' NOT NULL' : ''}`).join(', ');
            return `CREATE TABLE IF NOT EXISTS ${tableName} (${columns})`;
        });

        db.serialize(() => {
            sqls.forEach((sql) => {
                db.run(sql);
            });
        });
    },
    create(columns, schema) {
        const { tableName } = schema;

        return new Promise((resolve, reject) => {
            const statement = db.prepare(`INSERT INTO ${tableName} (${columns.map((column) => column.name).join(', ')}) VALUES (${columns.map(() => '?').join(', ')})`);
            statement.run(columns.map((column) => column.value), function callback(err) {
                if (err) return reject(err);
                return resolve(this);
            });
        });
    },
    find(query, schema) {
        const { tableName } = schema;
        const whereClause = query ? ` WHERE ${query}` : '';

        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM ${tableName}${whereClause}`, (err, rows) => {
                if (err) return reject(err);
                return resolve(rows);
            });
        });
    },
    update(columns, query, schema) {
        const { tableName } = schema;
        const whereClause = query ? ` WHERE ${query}` : '';

        return new Promise((resolve, reject) => {
            const statement = db.prepare(`UPDATE  ${tableName} SET ${columns.map((column) => `${column.name} = ?`).join(', ')}${whereClause}`);
            statement.run(columns.map((column) => column.value), function callback(err) {
                if (err) return reject(err);
                return resolve(this);
            });
        });
    },
    delete(query, schema) {
        const { tableName } = schema;
        const whereClause = query ? ` WHERE ${query}` : '';

        return new Promise((resolve, reject) => {
            db.all(`DELETE FROM ${tableName}${whereClause}`, function callback(err) {
                if (err) return reject(err);
                return resolve(this);
            });
        });
    },
};

module.exports = dbHelper;
