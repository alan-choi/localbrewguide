import React from 'react';
import Navbar from './navbar';
import BreweryForm from './breweryForm';
import BreweryList from './breweryList';
import BreweryDetail from './breweryDetail';
import BreweryStore from './../stores/breweryStore';
import BeerStore from './../stores/beerStore';
import GenForm from './genForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      beers: {},
      breweries: {},
      selectedBrewery: {},
      editMode: false };
    this.onInitialLoad = this.onInitialLoad.bind(this);
    this.updateSelectedBrewery = this.updateSelectedBrewery.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.getBeersFromStore = this.getBeersFromStore.bind(this);
  }

  componentDidMount(){
    BeerStore.addChangeListener(this.getBeersFromStore);
    BreweryStore.addChangeListener(this.onInitialLoad);
    BreweryStore.addSelectedBreweryListener(this.updateSelectedBrewery);
  }

  updateSelectedBrewery(selection) {
    console.log('updating selected brewery');
    var brewery = BreweryStore.getSelectedBrewery();
    this.setState({ selectedBrewery: selection || brewery });
  }

  updateDetailInfo() {
    console.log('updating brewery info');
    this.setState({ selectedBrewery: Brewery.getSelectedBrewery() });
  }

  onInitialLoad() {
    var breweries = BreweryStore.getBreweries();
    this.setState({ breweries: breweries });
  }

  getBeersFromStore() {
    var beers = BeerStre.getBeers();
    this.setState({ beers: beers });
  }

  toggleEditMode(event) {
    event.preventDefault();
    this.setState({ editMode: !this.state.editMode });
  }

  render() {
    var editText = (this.state.editMode ? "close" : "edit mode");
    var breweryForm = (this.state.editMode ?
      <BreweryForm
        editMode={ this.state.editMode }
        brewery={ this.state.selectedBrewery }/> : "");

    return (
      <div>
        <Navbar />
        <button onClick={ this.toggleEditMode }>{ editText }</button>
        <div className="brewery-container">
          { breweryForm }
          <BreweryList
            breweries={ this.state.breweries }
            editMode={ this.state.editMode }
            fillBreweryForm={ this.updateSelectedBrewery }/>
          <BreweryDetail
            editMode={ this.state.editMode }
            beers = { this.state.beers }
            brewery={ this.state.selectedBrewery }/>
        </div>
      </div>
    );
  }
}
export default App;
