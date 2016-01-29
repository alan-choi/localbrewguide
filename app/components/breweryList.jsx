import React from 'react';
import BreweryListItem from './breweryListItem';
import BreweryStore from './../stores/breweryStore';
import ApiUtil from './../utils/apiUtil';

class BreweryList extends React.Component {
  constructor() {
    super();
    this.state = ({ sortBy: 'name', order: 1, breweries: [] });

    this.handleClick = this.handleClick.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  componentWillReceiveProps(newProps) {
    var breweries = [];

    for (let brewery in newProps.breweries) {
      let selected = newProps.selectedBrewery._id === brewery;
      let currentBrew = newProps.breweries[brewery];
      let editMode = newProps.editMode;
      breweries.push(
        <BreweryListItem
          selected={ selected }
          key={ currentBrew.name + currentBrew._id }
          brewery={ currentBrew }
          editMode={ editMode }
          fillBreweryForm={ newProps.fillBreweryForm } />
      );
    }
    this.setState({ breweries: breweries });
  }

  sortBy(event) {
    event.preventDefault();
    var sortType = event.target.innerHTML.replace(/\s/, '').toLowerCase();
    var sortedBreweries = this.state.breweries.sort((a, b) => {
      return (this.state.order * (b.props.brewery.brewDetails.stats[sortType] -
                a.props.brewery.brewDetails.stats[sortType]));
    });

    this.setState({ breweries: sortedBreweries, order: (this.state.order * -1) });
  }

  handleClick(event) {
    event.preventDefault();
    var newSortBy = event.target.innerHTML.toLowerCase();
    var newOrder = (this.state.sortBy === newSortBy ? (-1 * this.state.order) : 1);

    this.setState({ sortBy: newSortBy, order: newOrder });
    ApiUtil.getBreweries({ sortBy: newSortBy, order: newOrder });
  }

  render() {
    var breweries = this.state.breweries;
    return (
      <div className="list">
        <div className="list-head">
          <ul>
            <li onClick={ this.handleClick }>Name</li>
            <li onClick={ this.handleClick }>Neighborhood</li>
            <li onClick={ this.sortBy }>ABV</li>
            <li onClick={ this.sortBy }>Beer Count</li>
          </ul>
        </div>
        <div className="brewerylist">
          { breweries }
        </div>
      </div>
    );
  }
}

export default BreweryList;
