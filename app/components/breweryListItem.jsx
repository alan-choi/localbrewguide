import React from 'react';
import ApiActions from './../actions/apiActions';
import ApiUtil from './../utils/apiUtil';

class breweryListItem extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.props.editMode) {
      this.props.fillBreweryForm(this.props.brewery);
    } else {
      ApiActions.changeSelectedBrewery(this.props.brewery._id);
      ApiActions.updateBeersInStore(this.props.brewery.beers);
      // ApiUtil.getBeers({id: this.props.brewery._id});
    }
  }

  render() {
    var brewDetails = this.props.brewery.brewDetails;
    var redText = (this.props.brewery.neighborhood === 'Private' ? 'private' : '');
    var highlight = (this.props.selected ? "highlight": "");

    return (
        <ul className={'item ' + highlight } onClick={this.handleClick}>
          <li>{ this.props.brewery.name }</li>
          <li className={ redText }>{ this.props.brewery.neighborhood }</li>
          <li>{ brewDetails.stats.abv }</li>
          <li>{ this.props.brewery.beers.length }</li>
        </ul>
    );
  }
}

export default breweryListItem;
