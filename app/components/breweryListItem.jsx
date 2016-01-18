import React from 'react';
import ApiActions from './../actions/apiActions';
import ApiUtil from './../utils/apiUtil';

class breweryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.props.editMode) {
      this.props.fillBreweryForm(this.props.brewery);
    } else {
      ApiActions.changeSelectedBrewery(this.props.brewery._id);
      ApiUtil.getBeers(this.props.brewery);
    }
  }

  render() {
    var beerSummary = this.props.brewery.beerSummary;
    return (
      <div className='brewery-item' onClick={ this.handleClick }>
        <ul>
          <li>{ this.props.brewery.name }</li>
          <li>{ this.props.brewery.neighborhood }</li>
          <li>{ beerSummary.abv }</li>
          <li>{ beerSummary.ibu}</li>
          <li>{ beerSummary.mostCommon }</li>
        </ul>
       </div>
    );
  }
}

export default breweryListItem;
