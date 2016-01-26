import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute ,browserHistory } from 'react-router';

import Search from './components/search';
import Navbar from './components/navbar';
import Welcome from './components/welcome';
import Plan from './components/plan';
import About from './components/about';
import BreweryStore from './stores/breweryStore';
import ApiUtil from './utils/apiUtil';


import './styles/main.scss';
import './styles/resets.scss';
import './styles/mobile.scss';
import './styles/landingpage.scss';

class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        <Navbar />
        { this.props.children }
      </div>
    );
  }
}

const routes = (
  <Route path ="/" component={ Main }>
    <IndexRoute component={ Welcome }/>
    <Route path="search" component={ Search } />
    <Route path="plan" component={ Plan } />
    <Route path="about" component={ About } />
  </Route>
);


document.addEventListener('DOMContentLoaded',() => {
  ReactDOM.render
  ((<Router history={ browserHistory }>
    { routes }
  </Router>), document.getElementById('app')); });
