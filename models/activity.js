var Sequelize = require('sequelize');
var db = require('./db.js');

var Activity = db.define('activitie', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  age_range: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Activity;
