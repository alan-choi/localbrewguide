import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import BreweryStore from './stores/breweryStore';
import './styles/main.css';
import ApiUtil from './utils/apiUtil';

const mountPoint = document.getElementById('app');

ApiUtil.loadDatabase();

function render() {
  ReactDOM.render(<App />, mountPoint);
}
render();
