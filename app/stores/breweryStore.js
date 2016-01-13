import dispatcher from './../dispatcher.js';
import apiUtil from './../utils/apiUtil.js';

class BreweryStore {
  constructor() {
    this.breweries = [];
    this.listeners = [];

    apiUtil.get('api/breweries')
      .then((data) => {
      this.items = data;
      console.log(data);
      this.triggerListeners();
    });

    dispatcher.register((event) => {
      console.log('regeistering event', event);
      // switch (event.payload) {
      //   case
      // }
    });
  }

  getBreweries() {
    console.log(this.breweries);
    return this.breweries;
  }

  onChange(listener) {
    this.listeners.push(listener);
  }

  triggerListeners() {
    this.listeners.forEach((listener) => {
      listener(this.items);
    });
  }
}

export default new BreweryStore();
