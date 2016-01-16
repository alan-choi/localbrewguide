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

  getBeers: function(brewery) {
    $.ajax({
      url: 'api/beers' ,
      type: 'GET',
      data: brewery,
      dataType: 'json',
      success: function(data) {
        console.log(data);
        // ApiActions.updateBeersInStore(data);
        console.log('got the beers!');
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
    console.log('patching data');
    $.ajax({
      url: 'api/breweries/' + data._id,
      type: 'PATCH',
      dataType: 'json',
      data: data,
      success: function(data) {
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
