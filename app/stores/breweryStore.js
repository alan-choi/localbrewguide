var AppDispatcher = require('./../dispatcher');
var EventEmitter = require('events').EventEmitter;
var BreweryConstants = require('./../Constants/breweryConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _breweries = {};

var BreweryStore = assign({}, EventEmitter.prototype, {
  getBreweries: function() {
    return _breweries;
  },

  addBreweries: function(newData) {
    newData.forEach(function(brewery) {
      _breweries[brewery.name] = brewery;
    });
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    switch(payload.actionType) {
      case BreweryConstants.INITIAL_LOAD:
        BreweryStore.addBreweries(payload.data);
        BreweryStore.emit(CHANGE_EVENT);
        break;
    }

    return true;
  })

});

module.exports = BreweryStore;
