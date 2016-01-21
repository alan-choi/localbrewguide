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
      ApiUtil.getBeers({id: this.props.brewery._id});
    }
  }

  render() {
    let beerSummary = this.props.brewery.beerSummary;
    let redText = (this.props.brewery.neighborhood === 'Private' ? 'private' : '');
    let highlight = (this.props.selected ? "highlight": "");
    return (
      <div
        className={ 'brewery-item '+ highlight }
        onClick={ this.handleClick }>
        <ul>
          <li>{ this.props.brewery.name }</li>
          <li className={ redText }>{ this.props.brewery.neighborhood }</li>
          <li>{ beerSummary.abv }</li>
          <li>{ this.props.brewery.beers.length }</li>
        </ul>
       </div>
    );
  }
}

export default breweryListItem;
