var db = require('./db.js');

var Place = require('./place.js');
var Hotel = require('./hotel.js');
var Restaurant = require('./restaurant.js');
var Activity = require('./activity.js');

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = {
  db,
  Hotel,
  Place,
  Restaurant,
  Activity
};
