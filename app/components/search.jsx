import React from 'react';
import Navbar from './navbar';
import BreweryForm from './breweryForm';
import BreweryList from './breweryList';
import BreweryDetail from './breweryDetail';
import BreweryStore from './../stores/breweryStore';
import BeerStore from './../stores/beerStore';
import GenForm from './genForm';
import ApiUtil from './../utils/apiUtil';
import {Link} from 'react-router';
import About from './about';

// const Fun = (props) => <p> hello from a stateless functional component {props.stuff}</p>;

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      beers: {},
      breweries: {},
      selectedBrewery: {},
      editMode: false };

    this.fetchBreweries = this.fetchBreweries.bind(this);
    this.updateSelectedBrewery = this.updateSelectedBrewery.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.getBeersFromStore = this.getBeersFromStore.bind(this);
    this.updateBeerList = this.updateBeerList.bind(this);
  }

  componentDidMount(){
    ApiUtil.getBreweries();
    BeerStore.addChangeListener(this.getBeersFromStore);
    BeerStore.addUpdateListener(this.updateBeerList);
    BreweryStore.addChangeListener(this.fetchBreweries);
    BreweryStore.addSelectedBreweryListener(this.updateSelectedBrewery);
  }

  componentWillUnmount() {
    BeerStore.removeChangeListener(this.getBeersFromStore);
    BeerStore.removeUpdateListener(this.updateBeerList);
    BreweryStore.removeChangeListener(this.fetchBreweries);
    BreweryStore.removeSelectedBreweryListener(this.updateSelectedBrewery);
  }

  updateSelectedBrewery(selection) {
    var brewery = BreweryStore.getSelectedBrewery();
    this.setState({ selectedBrewery: selection || brewery });
  }

  updateDetailInfo() {
    this.setState({ selectedBrewery: Brewery.getSelectedBrewery() });
  }

  fetchBreweries() {
    var breweries = BreweryStore.getBreweries();
    this.setState({ breweries: breweries });
  }

  getBeersFromStore() {
    var beers = BeerStore.getBeers();
    this.setState({ beers: beers });
  }

  updateBeerList() {
    var beers = BeerStore.getBeers();
    this.setState({ beers: beers });
  }

  toggleEditMode(event) {
    event.preventDefault();
    this.setState({ editMode: !this.state.editMode });
  }

  render() {
    var selectedBrew = this.state.selectedBrewery;
    var selected = (Object.keys(selectedBrew).length === 0 ? { _id: ""} : selectedBrew);
    var breweryDetail = (Object.keys(selectedBrew).length === 0 ? <div></div> :
    <BreweryDetail
      editMode={ this.state.editMode }
      beers = { this.state.beers }
      brewery={ this.state.selectedBrewery }/>
  );

    // var editText = (this.state.editMode ? "close" : "edit mode");
    // <button onClick={ this.toggleEditMode }>{ editText }</button>
    //
    // var breweryForm = (<BreweryForm
    //     editMode={ this.state.editMode }
    //     brewery={ this.state.selectedBrewery }/>);
    //     { breweryForm }

    return (
      <div>
        <div className="brewery-container">
          <h2>SF Breweries (city)</h2>
          <BreweryList
            selectedBrewery={ selected }
            sortByAbv={ this.sortByAbv }
            breweries={ this.state.breweries }
            editMode={ this.state.editMode }
            fillBreweryForm={ this.updateSelectedBrewery }/>
          { breweryDetail }
        </div>
      </div>
    );
  }
}
export default Search;
