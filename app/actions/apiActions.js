
import Dispatcher from './../dispatcher.js';
import BreweryConstants from './../constants/BreweryConstants.js';
var assign = require('object-assign');

var ApiActions = assign({}, Dispatcher.prototype, {
  initialLoad(data) {
    let payload = {
      action: BreweryConstants.INITIAL_LOAD,
      data: data
    };

    Dispatcher.dispatch(payload);
  }
});

export default ApiActions;
