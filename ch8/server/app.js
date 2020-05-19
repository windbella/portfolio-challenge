const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
const dotenv = require('dotenv');
const routes = require('./routes');
const dbHelper = require('./utilities/db-helper');
const fileHelper = require('./utilities/file-helper');

const Work = require('./models/work');
const File = require('./models/file');

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: path.join(__dirname, '.env.production') });
} else {
    dotenv.config({ path: path.join(__dirname, '.env.development') });
}

dbHelper.initialize(path.join(__dirname, './data/db/portfolio.db'), [File.schema, Work.schema]);
fileHelper.initialize(path.join(__dirname, './data/files'));

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

if (process.env.EXPRESS_APP_CORS === 'true') {
    app.use(cors());
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client', 'dist'), { index: false }));
app.use('/uploads', express.static(fileHelper.dirPath));
app.use('/', routes);

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
