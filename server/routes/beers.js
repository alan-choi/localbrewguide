import express from 'express';
import BeerItem from './../models/beerItem.js';

const beerRouter = express.Router({
  mergeParams: true
});

beerRouter.route('/')
  .get((req, res, next) => {
    let id = req.query._id;
    BeerItem.find({ breweryId: id })
      .then((items) => {
        res.send(items);
      }, (error) => {
        console.error("Error getting data: ", error);
        next(error);
      });
  })
  .post((req, res, next) => {
    const beer = req.body;
    BeerItem.create(beer)
    .then(() => {
      console.log('successful post');
      res.status(200).send(beer);
    }, (error) => {
      console.log("Error saving data: ", error);
      next(error);
    });
  });

  beerRouter.route('/:id')
    .patch((req, res, next) => {
      let id = req.params.id;
      let beer = req.body;
      BeerItem.findByIdAndUpdate(id, beer, (err, beer) => {
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

  export default beerRouter;
