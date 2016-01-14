import React from 'react';
import BreweryListItem from './breweryListItem';
import BreweryStore from './../stores/breweryStore';

var BreweryList = React.createClass({
  render: function() {
    let breweries = [];
    for (var brewery in this.props.breweries) {
      let currentBrew = this.props.breweries[brewery];
      breweries.push(
        <BreweryListItem key={ currentBrew.name + currentBrew._id } brewery={ currentBrew } />
      );
    }
    return (
      <div className="brewery-list">
        { breweries }
      </div>
    );
  }
});

export default BreweryList;
