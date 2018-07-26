var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/book');



/* GET ALL BOOKS */
router.get('/books', function(req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});


/* GET SINGLE BOOK BY ID */
router.get('/books/:id', function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* SAVE BOOK */
router.post('/books', function(req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* UPDATE BOOK */
router.put('/books/:id', function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* DELETE BOOK */
router.delete('/books/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



module.exports = router;
