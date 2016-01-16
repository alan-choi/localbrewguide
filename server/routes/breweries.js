import express from 'express';
import BreweryItem from './../models/breweryItem.js';

const breweryRouter = express.Router({
  mergeParams: true
});

breweryRouter.route('/')
  .get((req, res, next) => {
    BreweryItem.find({})
      .then((items) => {
        res.send(items);
      }, (error) => {
        console.error("Error getting data: ", error);
        next(error);
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
