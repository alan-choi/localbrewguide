var AppDispatcher = require('./../dispatcher');
var EventEmitter = require('events').EventEmitter;
var BreweryConstants = require('./../Const/breweryConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var UPDATE_DETAIL_EVENT = 'update_detail';
var _breweries = {};
var _selectedBrewery = {};

var BreweryStore = assign({}, EventEmitter.prototype, {
  getBreweries: function() {
    return _breweries;
  },

  getSelectedBrewery: function() {
    return _selectedBrewery;
  },

  addBreweries: function(newData) {
    newData.forEach(function(brewery) {
      _breweries[brewery._id] = brewery;
    });
  },

  updateBrewery: function(brewery) {
    for (var key in brewery) {
      _breweries[brewery._id][key] = brewery[key];
    }
  },

  changeSelectedBrewery: function(id) {
    _selectedBrewery = _breweries[id];
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  addSelectedBreweryListener: function(callback) {
    this.on(UPDATE_DETAIL_EVENT, callback);
  },

  addDetailChangeListener: function(callback) {
    this.on(UPDATE_INFO_EVENT, callback);
  },
  //remove event listener?

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    switch(payload.actionType) {
      case BreweryConstants.INITIAL_LOAD:
        BreweryStore.addBreweries(payload.data);
        BreweryStore.emit(CHANGE_EVENT);
        break;
      case BreweryConstants.ADD_BREWERY:
        // console.log('adding brewery');
        BreweryStore.addBreweries([payload.brewery]);
        // BreweryStore.updateBrewery(payload.brewery);
        BreweryStore.emit(CHANGE_EVENT);
        break;
      case BreweryConstants.UPDATE_SELECTED_BREWERY:
        BreweryStore.changeSelectedBrewery(payload.id);
        BreweryStore.emit(UPDATE_DETAIL_EVENT);
        break;
      case BreweryConstants.UPDATE_BREWERY:
        // console.log('updating brewery in store');
        BreweryStore.updateBrewery(payload.brewery);
        BreweryStore.emit(CHANGE_EVENT);
        BreweryStore.emit(UPDATE_DETAIL_EVENT);
        break;
    }

    return true;
  })

});

module.exports = BreweryStore;
