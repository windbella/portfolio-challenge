const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sqlite3 = require('sqlite3').verbose();

const indexRouter = require('./routes/index');

const app = express();

const db = new sqlite3.Database(path.join(__dirname, 'data/db/portfolio.db'));

db.serialize(() => {
    // db.run('CREATE TABLE lorem (info TEXT)');

    // const stmt = db.prepare('INSERT INTO lorem VALUES (?)');
    // for (let i = 0; i < 10; i += 1) {
    //     stmt.run(`Ipsum  ${i}`);
    // }
    // stmt.finalize();

    // db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
    //     console.log(`${row.id}: ${row.info}`);
    // });
});
db.close();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client', 'dist')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
