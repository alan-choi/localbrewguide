var mongoose = require('mongoose');

var BreweryItemSchema = {
  id: String,
  name: String,
  street: String,
  city: String,
  state: String,
  zip: String,
  neighborhood: String,
  website: String
};

var BreweryItem = mongoose.model('BreweryItem', BreweryItemSchema, 'BreweryItems');

module.exports = BreweryItem;
