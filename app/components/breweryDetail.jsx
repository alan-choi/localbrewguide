import React from 'react';
import GenForm from './genForm';
import Beer from './beerItem';

class BreweryDetail extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { beers: {} };
  }

  componentWillReceiveProps(newProps) {
    console.log('detailed brewery');
    // console.log(newProps.brewery);
  }

  render() {
    var beerForm = (this.props.editMode ?
      <GenForm
        fieldNames={['beerName', 'beerType', 'abv', 'ibu']}
        brewery={ this.props.brewery } /> : ""
    );
    var beers = [];

    for (var beer in this.props.beers) {
      beers.push(
        <Beer
          beer={ this.props.beers[beer] }
          brewery={ this.props.brewery } />
      );
    }
    return(
      <div className="brewery-detail">
        { this.props.brewery.name }
        <p>
          { this.props.brewery.street }
        </p>
        <p>
          { this.props.brewery.city } { this.props.brewery.state } { this.props.brewery.zip }
        </p>
        <p>
          { this.props.brewery.website }
        </p>
        { beerForm }
      </div>
    );
  }
}

export default BreweryDetail;
