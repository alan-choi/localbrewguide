var mongoose = require('mongoose');

var BeerItemSchema = {
  id: String,
  breweryId: String,
  beerName: String,
  beerType: String,
  abv: Number,
  ibu: Number,
};

var BeerItem = mongoose.model('BeerItem', BeerItemSchema, 'BeerItems');

module.exports = BeerItem;
