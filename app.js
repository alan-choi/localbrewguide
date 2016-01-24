import express from 'express';
import engines from 'consolidate';
import bodyParser from 'body-parser';
import React from 'react';
import ReactDOM from 'react-dom/server';

import breweryRouter from './server/routes/breweries.js';
import beerRouter from './server/routes/beers.js';
import './server/database.js';
import BreweryItem from './server/models/breweryItem';
import BeerItem from './server/models/beerItem';
import BreweryList from './app/components/breweryList';

var app = express();
app.engine('hbs', engines.handlebars);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/breweries', breweryRouter);
app.use('/api/beers', beerRouter);

app.use('/client', express.static(__dirname + '/dist/client'));
app.use('/vendor', express.static(__dirname + '/dist/vendor'));
app.use('/styles', express.static(__dirname + '/dist/styles'));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000);
