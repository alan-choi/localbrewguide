
import Dispatcher from './../dispatcher.js';
import BreweryConstants from './../constants/BreweryConstants.js';
var assign = require('object-assign');

var ApiActions = assign({}, Dispatcher.prototype, {
  getBreweries: function(data) {
    console.log('loading initial data');
    let payload = {
      actionType: BreweryConstants.INITIAL_LOAD,
      data: data
    };

    Dispatcher.dispatch(payload);
  },

  addBrewery: function(data) {
    console.log('adding new brewery');
    let payload = {
      actionType: BreweryConstants.ADD_BREWERY,
      brewery: data
    };
    console.log(payload);
    Dispatcher.dispatch(payload);
  }
});

module.exports = ApiActions;
