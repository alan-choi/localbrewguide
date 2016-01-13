/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/

import ReactDOM from 'react-dom';
import BreweryList from './components/breweryList.jsx';
import BreweryStore from './stores/breweryStore.js';

const mountPoint = document.getElementById('app');
let initial = BreweryStore.getBreweries(); //get items from store

function render() {
  ReactDOM.render(<BreweryList items={initial} />, mountPoint);
}

BreweryStore.onChange((items) => {
  initial = items;
  render();
});

render();
