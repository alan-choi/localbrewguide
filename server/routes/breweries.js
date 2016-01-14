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

  export default breweryRouter;
