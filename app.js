var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var BookApiRouter = require('./routes/book');

var app = express();

// mongoose connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MEAN-CRUD-book-library', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('Mongoose connection successful on mongodb://localhost:27017/MEAN-CRUD-book-library'))
.catch((err) => console.error(err));



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/MEAN-CRUD-book-library')));
app.use('/', express.static(path.join(__dirname, 'dist/MEAN-CRUD-book-library')));
app.use('/api', BookApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

module.exports = app;
