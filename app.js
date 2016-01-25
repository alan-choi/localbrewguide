var express = require('express');
var engines = require('consolidate');
var bodyParser = require('body-parser');

var breweryRouter = require('./server/routes/breweries.js');
var beerRouter = require('./server/routes/beers.js');
require('./server/database.js');


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

var server = app.listen(process.env.PORT || 8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
