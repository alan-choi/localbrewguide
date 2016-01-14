import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import BreweryStore from './stores/breweryStore';
import './styles/main.css';
import ApiUtil from './utils/apiUtil';

ApiUtil.loadDatabase();

document.addEventListener('DOMContentLoaded',() => {
  ReactDOM.render(<App />, document.getElementById('app')); });
