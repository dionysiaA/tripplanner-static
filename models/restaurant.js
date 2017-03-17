var Sequelize = require('sequelize');
var db = require('./db.js');

var Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      //add validations later
    }
  },
  cuisine: {
    type: Sequelize.STRING, //comma-delimited string list
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER, //set range to number 1-5
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  }
});

module.exports = Restaurant;
