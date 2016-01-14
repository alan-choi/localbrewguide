import React from 'react';
import Navbar from './navbar';
import BreweryForm from './breweryForm';
import BreweryList from './breweryList';
import BreweryStore from './../stores/breweryStore';
import GenForm from './genForm';

var App = React.createClass({
  getInitialState: function() {
    return { breweries: {} };
  },

  componentDidMount: function(){
    BreweryStore.addChangeListener(this.onInitialLoad);
  },

  onInitialLoad: function() {
    var breweries = BreweryStore.getBreweries();
    this.setState({ breweries: breweries });
  },

  render: function() {
    return (
      <div>
        <Navbar />
        <div className="brewery-container">
          <BreweryList breweries={ this.state.breweries }/>
          <BreweryForm />
          <GenForm />
        </div>
      </div>
    );
  }
});

module.exports = App;
