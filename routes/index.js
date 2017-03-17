'use strict'
const models = require('../models/')
const router = require('express').Router();

module.exports = router;

router.get('/', function (req, res, next) {

  var hotelsQuery = models.Hotel.findAll();
  var activitiesQuery = models.Activity.findAll();
  var restaurantsQuery = models.Restaurant.findAll();

  Promise.all([hotelsQuery, activitiesQuery, restaurantsQuery])
    .then(function(values) {
      var allHotels = values[0];
      var allActivities = values[1];
      var allRestaurants = values[2];
      res.render('index', {
        allHotels: allHotels,
        allRestaurants: allRestaurants,
        allActivities: allActivities
      });
    })
    .catch(next);

})
