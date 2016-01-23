import mongoose from 'mongoose';

const BreweryItemSchema = {
  id: String,
  name: String,
  street: String,
  city: String,
  state: String,
  zip: String,
  neighborhood: String,
  website: String
};

const BreweryItem = mongoose.model('BreweryItem', BreweryItemSchema, 'BreweryItems');

export default BreweryItem;
