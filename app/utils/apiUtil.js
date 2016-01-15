import $ from 'jquery';
import ApiActions from './../actions/apiActions';

var ApiUtil = {
  loadDatabase: function() {
    $.ajax({
      url: '/api/breweries',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        ApiActions.getBreweries(data);
      }
    });
  },

  postBrewery: function(data) {
    $.ajax({
      url: 'api/breweries',
      type: 'POST',
      data: data,
      success: function(data) {
        console.log('success!');
        ApiActions.addBrewery(data);
      },
      error: function(error) {
        console.log('error ' + error);
      }
    });
  },

  patchBrewery: function(data) {
    $.ajax({
      url: 'api/breweries/:id',
      type: 'PATCH',
      data: data,
      succcess: function(data) {
        console.log('updated!');
        ApiActions.updateBrewery(data);
      },
      error: function(error) {
        console.log('error updating');
      }
    });
  }

};

module.exports = ApiUtil;
