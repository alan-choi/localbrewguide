import React from 'react';
import ApiActions from './../actions/apiActions';

class Beer extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    event.preventDefault();
    ApiActions.changeSelectedBeer(this.props.beer);
  }

  render() {
    return (
      <ul className='item' onClick={ this.handleClick }>
        <li>{this.props.beer.beerName}</li>
        <li>{this.props.beer.beerType}</li>
        <li>{this.props.beer.abv}</li>
        <li>{this.props.beer.ibu}</li>
      </ul>
    );
  }
}

export default Beer;
