const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json(), bodyParser.urlencoded());

app.set('view engine', 'html');
nunjucks.configure('views', {noCache: true});
app.engine('html', nunjucks.render);

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));


//***ROUTE DEFINITIONS */
//client comms
const routes = require('./routes');
//db comms - MAKE SURE TO HOOK UP TO YOUR SEQUELIZE MODELS
const models = require('./models/')
//alternatively:

app.use("/", routes);

app.use(function(req, res, next) {
  var err = new Error('Route not found');
  err.status = 404;
  next(err);
})

models.db.sync()
.then(function() {
  app.listen(3000, function () {
    console.log('Server is listening on port 3000!');
  });
})
.catch(function(err, req, res, next) {
  next(err);
})

app.use(function(err, req, res, next) { //error-handling middleware
  res.status(err.status || 500);
  console.error(err);
  res.render('error', { err: err });
})
