import React from 'react';
import GenForm from './genForm';
import Beer from './beerItem';
import BeerStore from './../stores/beerStore';

class BreweryDetail extends React.Component {
  constructor(props) {
    super(props);
    this.abvSum = 0;
    this.ibuSum = 0;
    this.totalBeers = 0;
    this.changeSelectedBeer = this.changeSelectedBeer.bind(this);
    this.state = { selectedBeer: {} };
  }

  componentDidMount() {
    BeerStore.addSelectedBeerListener(this.changeSelectedBeer);
  }

  componentWillReceiveProps(newProps) {
    console.log('detailed brewery props');
  }

  changeSelectedBeer() {
    let beer = BeerStore.getSelectedBeer();
    this.setState({ selectedBeer: beer });
  }

  render() {
    var beerForm = (<GenForm
        fieldNames={['beerName', 'beerType', 'abv', 'ibu']}
        editMode={ this.props.editMode }
        beer={ this.state.selectedBeer }
        brewery={ this.props.brewery } />);
    var beers = [];

    for (var beer in this.props.beers) {
      beers.push(
        <Beer
          key={ this.props.beers[beer]._id }
          beer={ this.props.beers[beer] }
          brewery={ this.props.brewery } />
      );
    }
    return(
      <div className="brewery-detail">
        <div className="brewery-name">{ this.props.brewery.name }</div>
        <div className="brewery-neighborhood">{ this.props.brewery.neighborhood }</div>
        <div className="brewery-website"><a href={'http://'+this.props.brewery.website} target="_blank" >website</a></div>
        <div className="stats">
          <div className="major-stat">
            { this.props.brewery.beerSummary.abv }
            <p>ABV</p>
          </div>
          <div className="major-stat">
            { this.props.brewery.beerSummary.ibu }
            <p>IBU</p>
          </div>
          <div className="major-stat">
            { this.props.brewery.beers.length }
            <p>Total Beers</p>
          </div>
        </div>
        { beerForm }
        <br />
        <div className="beer-list">
          <div className="beerlist-header">
            <ul>
              <li>Name</li>
              <li>Type</li>
              <li>ABV</li>
              <li>IBU</li>
            </ul>
          </div>
          <div className="beerlist-scroll">
            { beers }
          </div>
        </div>
      </div>
    );
  }
}

export default BreweryDetail;
