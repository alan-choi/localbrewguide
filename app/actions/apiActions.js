import Dispatcher from './../dispatcher';
import BeerConstants from './../Const/beerConstants';
import BreweryConstants from './../Const/breweryConstants';
var assign = require('object-assign');

var ApiActions = assign({}, Dispatcher.prototype, {
  getBreweries: function(data) {
    let payload = {
      actionType: BreweryConstants.RECEIVED_BREWERIES,
      data: data
    };

    Dispatcher.dispatch(payload);
  },

  updateBeersInStore: function(data) {
    let payload = {
      actionType: BeerConstants.UPDATE_BEER_LIST,
      beers: data
    };

    Dispatcher.dispatch(payload);
  },

  addNewBeerToStore: function(beer) {
    let payload = {
      actionType: BeerConstants.ADD_BEER,
      beer: beer
    };
    Dispatcher.dispatch(payload);
  },

  changeSelectedBeer: function(beer) {
    let payload = {
      actionType: BeerConstants.SELECT_BEER,
      beer: beer
    };
    Dispatcher.dispatch(payload);
  },

  changeSelectedBrewery: function(id) {
    let payload = {
      actionType: BreweryConstants.UPDATE_SELECTED_BREWERY,
      id: id
    };
    Dispatcher.dispatch(payload);
  },

  addBrewery: function(data) {
    console.log('adding new brewery');
    let payload = {
      actionType: BreweryConstants.ADD_BREWERY,
      brewery: [data]
    };
    Dispatcher.dispatch(payload);
  },

  updateBrewery: function(data) {
    console.log('updating brewery action');
    let payload = {
      actionType: BreweryConstants.UPDATE_BREWERY,
      brewery: data
    };
    Dispatcher.dispatch(payload);
  },

});

module.exports = ApiActions;
