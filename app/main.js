import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import BreweryStore from './stores/breweryStore';
import './styles/main.scss';
import './styles/resets.scss';
import './styles/mobile.scss';

import ApiUtil from './utils/apiUtil';

document.addEventListener('DOMContentLoaded',() => {
  ReactDOM.render(<App />, document.getElementById('app')); });
