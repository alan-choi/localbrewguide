var express = require('express');
var BreweryItem = require('./../models/breweryItem.js');
var BeerItem = require('./../models/beerItem.js');

var breweryRouter = express.Router({
  mergeParams: true
});

var summarizeBeers = function(beers) {
  var brewDetails = { summary: {}, stats: {} };
  var mostCommon = '';
  var max = 0;
  var abvSum = 0;
  var ibuSum = 0;
  beers.forEach(function(beer) {
    abvSum += beer.abv;
    ibuSum += beer.ibu;
    var beerType = beer.beerType;
    if (typeof brewDetails.summary[beerType] === 'undefined') {
      brewDetails.summary[beerType] = 1;
    } else {
      brewDetails.summary[beerType] += 1;
      if (brewDetails.summary[beerType] > max) {
        max = brewDetails.summary[beerType];
        brewDetails.stats.mostCommon = beerType;
      }
    }
  });
  // console.log(brewDetails.summary);
  brewDetails.stats.abv = ((abvSum/beers.length) || 0).toFixed(2);
  brewDetails.stats.ibu = ((ibuSum/beers.length)|| 0).toFixed(2);
  brewDetails.stats.beercount = beers.length;
  return brewDetails;
};

breweryRouter.route('/')
  .get(function(req, res, next) {
    var sortBy = (req.query.order > 0 ? req.query.sortBy : '-' + req.query.sortBy);
    BreweryItem.find().sort(sortBy).lean().exec(function(error, breweries)  {
      if (error){
        console.log('error getting data');
        res.status(500);
      }
      var counter = 0;
      breweries.forEach(function(brewery) {
        var beers = BeerItem.find({ breweryId: brewery._id }).lean().exec(function(error, beers) {
          counter += 1;
          brewery.beers = beers;
          brewery.brewDetails = summarizeBeers(beers);
          if (counter === breweries.length) {
            res.send(breweries);
          }
        });
      });
    });
  })
  .post(function(req, res, next) {
    var brewery = req.body;
    BreweryItem.create(brewery)
    .then(function() {
      console.log('successful post');
      res.status(200).send(brewery);
    }, function(error) {
      console.log("Error saving data: ", error);
      next(error);
    });
  });

  breweryRouter.route('/:id')
    .patch(function(req, res, next) {
      var id = req.params.id;
      var brewery = req.body;
      BreweryItem.findByIdAndUpdate(id, brewery, function(err, brewery) {
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

  module.exports = breweryRouter;
