import $ from 'jquery';
import ApiActions from './../actions/apiActions';

var ApiUtil = {
  getBreweries: function() {
    $.ajax({
      url: '/api/breweries',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        ApiActions.getBreweries(data);
      },
      error: function(error) {
        console.log('error fetching database');
      }
    });
  },

  postBrewery: function(data) {
    $.ajax({
      url: 'api/breweries',
      type: 'POST',
      data: data,
      success: function(data) {
        ApiUtil.getBreweries();
        // ApiActions.addBrewery(data);
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
        // console.log('updated!');
        ApiActions.updateBrewery(data);
      },
      error: function(error) {
        console.log('error updating');
      }
    });
  },

  getBeers: function(id) {
    $.ajax({
      url: 'api/beers' ,
      type: 'GET',
      data: id,
      dataType: 'json',
      success: function(data) {
        ApiActions.updateBeersInStore(data);
      },
      error: function(error) {
        console.log('error getting beers...');
      }
    });
  },

  postBeer: function(beer) {
    $.ajax({
      url: 'api/beers',
      type: 'POST',
      data: beer,
      success: function(data) {
        ApiUtil.getBeers({id: data.breweryId});
        // ApiActions.addNewBeerToStore(data);
      },
      error: function(error) {
        console.log('error adding beer');
      }
    });
  },

  patchBeer: function(beer) {
    $.ajax({
      url: 'api/beers/' + beer._id,
      type: 'PATCH',
      dataType: 'json',
      data: beer,
      success: function(data) {
        ApiActions.updateBeersInStore(data);
      }
    });
  }
};

module.exports = ApiUtil;
