import React from 'react';
import BreweryListItem from './breweryListItem';
import BreweryStore from './../stores/breweryStore';

class BreweryList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let breweries = [];
    for (var brewery in this.props.breweries) {
      let currentBrew = this.props.breweries[brewery];
      let editMode = this.props.editMode;
      breweries.push(
        <BreweryListItem
          key={ currentBrew.name + currentBrew._id }
          brewery={ currentBrew }
          editMode={ editMode }
          fillBreweryForm={ this.props.fillBreweryForm } />
      );
    }
    return (
      <div className="brewery-list">
        { breweries }
      </div>
    );
  }
}

export default BreweryList;
