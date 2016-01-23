import mongoose from 'mongoose';
import appconfig from './../appconfig';
import BreweryItem from './models/breweryItem.js';
import BeerItem from './models/beerItem.js';

mongoose.connect('mongodb://'+appconfig.mongoID+':'+appconfig.mongoPW+'@ds049925.mongolab.com:49925/localbrewguide');
// mongoose.connect('mongodb://localhost/localbrewguide');
mongoose.Promise = global.Promise;
const db = mongoose.connection;

function seedData() {
  BreweryItem.count({}, (error, count) => {
    if (error) { throw error; }

    if (count === 0) {
      console.log("seeding data...");
      const breweries = [{
        name: "Local Brewing Co."
      }, {
        name: "21st Amendment"
      }];
      breweries.forEach((brewery) => {
        BreweryItem.create(brewery, (error) = {
          if (error) { console.error(error); }
        });
      });
    }
  });
}

db.on('error', console.error.bind(console, "connection error:"));
db.once('open', () => {
  console.log("connection to database established.");
  seedData();
});
