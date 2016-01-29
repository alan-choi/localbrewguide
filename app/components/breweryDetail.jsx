import React from 'react';
import GenForm from './genForm';
import Beer from './beerItem';
import BeerStore from './../stores/beerStore';
import beerPieChart from './beerPieChart';

class BreweryDetail extends React.Component {
  constructor() {
    super();
    this.state = { selectedBeer: {} };

    this.changeSelectedBeer = this.changeSelectedBeer.bind(this);
  }

  componentDidMount() {
    BeerStore.addSelectedBeerListener(this.changeSelectedBeer);
  }

  componentWillUnmount() {
    BeerStore.removeSelectedBreweryListener(this.changeSelectedBeer);
  }

  changeSelectedBeer() {
    var beer = BeerStore.getSelectedBeer();
    this.setState({ selectedBeer: beer });
  }

  render() {
    // var beerForm = (<GenForm
    //     fieldNames={['beerName', 'beerType', 'abv', 'ibu']}
    //     editMode={ this.props.editMode }
    //     beer={ this.state.selectedBeer }
    //     brewery={ this.props.brewery } />);
    // { beerForm }
    var brewery = this.props.brewery;
    var beers = [];
    for (var beer in this.props.beers) {
      beers.push(
        <Beer
          key={ this.props.beers[beer]._id }
          beer={ this.props.beers[beer] }
          brewery={ brewery } />
      );
    }
    return(
      <div className="brewery-detail">
        <h1 className="brewery-name">{ brewery.name }</h1>
        <div className="brewery-neighborhood">{ brewery.neighborhood }</div>
        <div className="brewery-website"><a href={'http://'+brewery.website} target="_blank" >website</a></div>
        <div className="stats">
          <div className="major-stat">
            { brewery.brewDetails.stats.abv }
            <p>ABV</p>
          </div>
          <div className="major-stat">
            { brewery.brewDetails.stats.ibu }
            <p>IBU</p>
          </div>
          <div className="major-stat">
            { brewery.beers.length }
            <p>Total Beers</p>
          </div>
        </div>
        <beerPieChart brewery={brewery} />
        <section>
          <div className="list">
            <h2>Beer List</h2>
            <div className="list-head">
              <ul>
                <li>Name</li>
                <li>Type</li>
                <li>ABV</li>
                <li>IBU</li>
              </ul>
            </div>
            <div className="beerlist">
              { beers }
            </div>
          </div>

        </section>

      </div>
    );
  }
}

export default BreweryDetail;
