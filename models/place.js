var Sequelize = require('sequelize');
var db = require('./db.js');

var Place = db.define('place', {
  address: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: false
  }
});

module.exports = Place;
