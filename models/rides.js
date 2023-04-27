const db = require("../db/connection");

exports.selectRidesByParkId = (parkId) => {
  return db
    .query(
      "SELECT rides.*, parks.park_name FROM rides JOIN parks ON rides.park_id = parks.park_id WHERE rides.park_id = $1",
      [parkId]
    )
    .then((result) => {
      return result.rows;
    });
};
