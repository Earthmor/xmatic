let createError = require('http-errors');
let express = require('express');
let compileSass = require('express-compile-sass');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');


let homeRouter = require('./src/routes/home');
let aboutRouter = require('./src/routes/about');
let projectsRouter = require('./src/routes/projects');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compileSass({
    root: path.join(__dirname, 'public'),
    sourceMap: true,
    sourceComments: true,
    watchFiles: true,
    logToConsole: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectsRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
