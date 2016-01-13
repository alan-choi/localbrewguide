import mongoose from 'mongoose';

const BreweryItemSchema = {
  id: String,
  name: String
};

const BreweryItem = mongoose.model('BreweryItem', BreweryItemSchema, 'breweryItems');

export default BreweryItem;
