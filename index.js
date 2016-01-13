import express from 'express';
import engines from 'consolidate';
import bodyParser from 'body-parser';
import React from 'react';
import ReactDOM from 'react-dom/server';

import breweryRouter from './server/routes/breweries.js';
import './server/database.js';
import BreweryItem from './server/models/breweryItem';
import BreweryList from './app/components/breweryList';

const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/breweries', breweryRouter);

app.use('/client', express.static(__dirname + '/dist/client'));
app.use('/vendor', express.static(__dirname + '/dist/vendor'));
app.use('/styles', express.static(__dirname + '/dist/styles'));

app.get('/', (req, res) => {
  // res.render('index');
  const reactApp = React.createFactory(BreweryList);
  BreweryItem.find()
    .then((data) => {
      const generated = ReactDOM.renderToString(reactApp( {items: data} ));
      res.render('index', { reactOutput: generated });
    }, (error) => {
      console.error('Error loading initial data', error);
      res.status(500).send(error);
    });
});

app.listen(3000);
