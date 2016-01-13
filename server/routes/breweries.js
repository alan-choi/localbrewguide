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
  });


  export default breweryRouter;
