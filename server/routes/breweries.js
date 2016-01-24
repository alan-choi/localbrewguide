import express from 'express';
import BreweryItem from './../models/breweryItem.js';
import BeerItem from './../models/beerItem.js';

const breweryRouter = express.Router({
  mergeParams: true
});

var summarizeBeers = function(beers) {
  let brewDetails = { summary: {}, stats: {} };
  let mostCommon = '';
  let max = 0;
  let abvSum = 0;
  let ibuSum = 0;
  beers.forEach((beer) => {
    abvSum += beer.abv;
    ibuSum += beer.ibu;
    let beerType = beer.beerType;
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
  .get((req, res, next) => {
    var sortBy = (req.query.order > 0 ? req.query.sortBy : '-' + req.query.sortBy);
    console.log(sortBy);
    BreweryItem.find().sort(sortBy).lean().exec((error, breweries) => {
      if (error){
        console.log('error getting data');
        res.status(500);
      }
      var counter = 0;
      breweries.forEach((brewery) => {
        let beers = BeerItem.find({ breweryId: brewery._id }).lean().exec((error, beers) => {
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
  .post((req, res, next) => {
    const brewery = req.body;
    BreweryItem.create(brewery)
    .then(() => {
      console.log('successful post');
      res.status(200).send(brewery);
    }, (error) => {
      console.log("Error saving data: ", error);
      next(error);
    });
  });

  breweryRouter.route('/:id')
    .patch((req, res, next) => {
      let id = req.params.id;
      let brewery = req.body;
      BreweryItem.findByIdAndUpdate(id, brewery, (err, brewery) => {
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

  export default breweryRouter;
