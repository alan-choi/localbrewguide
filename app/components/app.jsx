import React from 'react';
import Navbar from './navbar';
import BreweryForm from './breweryForm';
import BreweryList from './breweryList';
import BreweryDetail from './breweryDetail';
import BreweryStore from './../stores/breweryStore';
import GenForm from './genForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = { breweries: {}, selectedBrewery: {} };
    this.onInitialLoad = this.onInitialLoad.bind(this);
    this.updateSelectedBrewery = this.updateSelectedBrewery.bind(this);
  }

  componentDidMount(){
    BreweryStore.addChangeListener(this.onInitialLoad);
    BreweryStore.addSelectedBreweryListener(this.updateSelectedBrewery);
  }

  updateSelectedBrewery() {
    var brewery = BreweryStore.getSelectedBrewery();
    this.setState({ selectedBrewery: brewery });
  }

  onInitialLoad() {
    var breweries = BreweryStore.getBreweries();
    this.setState({ breweries: breweries });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="brewery-container">
          <BreweryForm />
          <BreweryList breweries={ this.state.breweries }/>
          <BreweryDetail brewery={ this.state.selectedBrewery }/>
        </div>
      </div>
    );
  }
}
export default App;
