var Sequelize = require('sequelize');
var db = require('./db.js');

var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  num_stars: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      max: 5.0,
      min: 1.0,
    }
  },
  amenities: {
    type: Sequelize.STRING,
  }
});

module.exports = Hotel;
