import React from 'react';
import GenForm from './genForm';
import Beer from './beerItem';
import BeerStore from './../stores/beerStore';
import BeerBarChart from './beerBarChart';

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
    // var beerForm = (<GenForm
    //     fieldNames={['beerName', 'beerType', 'abv', 'ibu']}
    //     editMode={ this.props.editMode }
    //     beer={ this.state.selectedBeer }
    //     brewery={ this.props.brewery } />);
    //     { beerForm }
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
        <h1 className="brewery-name">{ this.props.brewery.name }</h1>
        <div className="brewery-neighborhood">{ this.props.brewery.neighborhood }</div>
        <div className="brewery-website"><a href={'http://'+this.props.brewery.website} target="_blank" >website</a></div>
        <div className="stats">
          <div className="major-stat">
            { this.props.brewery.brewDetails.stats.abv }
            <p>ABV</p>
          </div>
          <div className="major-stat">
            { this.props.brewery.brewDetails.stats.ibu }
            <p>IBU</p>
          </div>
          <div className="major-stat">
            { this.props.brewery.beers.length }
            <p>Total Beers</p>
          </div>
        </div>
        <BeerBarChart brewery={this.props.brewery} />
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
