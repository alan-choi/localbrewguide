import React from 'react';
import BreweryList from './breweryList';
import BreweryStore from './../stores/breweryStore';

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
        <BreweryList breweries={ this.state.breweries }/>
      </div>
    );
  }
});

export default App;
