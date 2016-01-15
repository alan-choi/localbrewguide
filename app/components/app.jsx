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
    this.state = { breweries: {}, selectedBrewery: {}, editMode: false };
    this.onInitialLoad = this.onInitialLoad.bind(this);
    this.updateSelectedBrewery = this.updateSelectedBrewery.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  componentDidMount(){
    BreweryStore.addChangeListener(this.onInitialLoad);
    BreweryStore.addSelectedBreweryListener(this.updateSelectedBrewery);
  }

  updateSelectedBrewery(selection) {
    var brewery = BreweryStore.getSelectedBrewery();
    this.setState({ selectedBrewery: selection || brewery });
  }

  onInitialLoad() {
    var breweries = BreweryStore.getBreweries();
    this.setState({ breweries: breweries });
  }

  toggleEditMode(event) {
    event.preventDefault();
    this.setState({ editMode: !this.state.editMode });
  }

  render() {
    var editText = (this.state.editMode ? "close" : "edit mode");
    return (
      <div>
        <Navbar />
        <button onClick={ this.toggleEditMode }>{ editText }</button>
        <div className="brewery-container">
          <BreweryForm
            editMode={ this.state.editMode }
            brewery={ this.state.selectedBrewery }/>
          <BreweryList
            breweries={ this.state.breweries }
            editMode={ this.state.editMode }
            fillBreweryForm={ this.updateSelectedBrewery }/>
          <BreweryDetail brewery={ this.state.selectedBrewery }/>
        </div>
      </div>
    );
  }
}
export default App;
