var AppDispatcher = require('./../dispatcher');
var EventEmitter = require('events').EventEmitter;
var BeerConstants = require('./../Const/beerConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var UPDATE_EVENT = 'update';
var SELECTED_EVENT = 'selected';
var _beers = {};
var _selectedBeer = {};

var BeerStore = assign({}, EventEmitter.prototype, {
  getBeers: function() {
    return _beers;
  },

  getSelectedBeer: function() {
    return _selectedBeer;
  },

  updateBeerList: function(newData) {
    if (Array.isArray(newData)) {
      _beers = {};
      newData.forEach(function(beer) {
        _beers[beer._id] = beer;
      });
    } else {
      this.updateOneBeer(newData);
    }
  },

  updateOneBeer: function(beer) {
    _beers[beer._id] = beer;
  },

  updateSelectedBeer: function(beer) {
    _selectedBeer = beer;
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  addSelectedBeerListener: function(callback) {
    this.on(SELECTED_EVENT, callback);
  },

  addUpdateListener: function(callback) {
    this.on(UPDATE_EVENT, callback);
  },

  removeUpdateListener: function(callback) {
    this.removeListener(UPDATE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    switch(payload.actionType) {
      case BeerConstants.UPDATE_BEER_LIST:
        BeerStore.updateBeerList(payload.beers);
        BeerStore.emit(CHANGE_EVENT);
      break;
      case BeerConstants.ADD_BEER:
        BeerStore.updateOneBeer(payload.beer);
        BeerStore.emit(UPDATE_EVENT);
      break;
      case BeerConstants.SELECT_BEER:
        BeerStore.updateSelectedBeer(payload.beer);
        BeerStore.emit(SELECTED_EVENT);
      break;
    }

    return true;
  })

});

module.exports = BeerStore;
