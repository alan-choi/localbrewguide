import React from 'react';

class Beer extends React.Component {

  render() {
    return (
      <ul>
        <li>{this.props.beer.beerName}</li>
        <li>{this.props.beer.beerType}</li>
        <li>{this.props.beer.abv}</li>
        <li>{this.props.beer.ibu}</li>
      </ul>
    );
  }
}

export default Beer;
