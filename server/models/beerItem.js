import mongoose from 'mongoose';

const BeerItemSchema = {
  id: String,
  breweryId: String,
  beerName: String,
  beerType: String,
  abv: Number,
  ibu: Number,
};

const BeerItem = mongoose.model('BeerItem', BeerItemSchema, 'BeerItems');

export default BeerItem;
