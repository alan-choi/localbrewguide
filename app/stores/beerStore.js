var AppDispatcher = require('./../dispatcher');
var EventEmitter = require('events').EventEmitter;
var BeerConstants = require('./../Constants/beerConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
// var UPDATE_DETAIL_EVENT = 'update_detail';
var _beers = {};
// var _selectedBrewery = {};

var BeerStore = assign({}, EventEmitter.prototype, {
  getBeers: function() {
    return _beers;
  },

  updateBeerList: function(newData) {
    _beers = {};
    newData.forEach(function(beer) {
      _beers[beer._id] = beer;
    });
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    switch(payload.actionType) {
      case BeerConstants.UPDATE_BEER_LIST:
        BeerStore.updateBeerList(payload.beers);
        BeerStore.emit(CHANGE_EVENT);
      break;
      default:
        console.log('no event fired...');
    }

    return true;
  })

});

module.exports = BeerStore;
