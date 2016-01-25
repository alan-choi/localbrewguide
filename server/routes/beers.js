var express = require('express');
var BeerItem = require('./../models/beerItem.js');

var beerRouter = express.Router({
  mergeParams: true
});

beerRouter.route('/')
  .get(function(req, res, next) {
    var id = req.query.id;
    var query = (typeof req.query.id === 'undefined'? {} : {breweryId: req.query.id} );
    BeerItem.find(query)
      .then(function(items) {
        res.send(items);
      }, function(error) {
        console.error("Error getting data: ", error);
        next(error);
      });
  })
  .post(function(req, res, next) {
    var beer = req.body;
    BeerItem.create(beer)
    .then(function() {
      console.log('successful post');
      res.status(200).send(beer);
    }, function(error) {
      console.log("Error saving data: ", error);
      next(error);
    });
  });

  beerRouter.route('/:id')
    .patch(function(req, res, next) {
      var id = req.params.id;
      var beer = req.body;
      BeerItem.findByIdAndUpdate(id, beer, function(err, beer) {
        if (err) {
          console.error('error updating data: ', err);
          res.status(500);
          next(error);
        } else {
          console.log('updated!');
          res.status(200).send(req.body);
        }
      });
    });

  module.exports = beerRouter;
