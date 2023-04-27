const db = require("../db/connection");

exports.selectParks = () => {
  return db.query(`SELECT * FROM parks;`).then((park) => {
    return park.rows;
  });
};

exports.updateParkById = (parkId, updates) => {
  const values = [updates.park_name, updates.annual_attendance, parkId];
  return db
    .query(
      `UPDATE parks SET park_name = $1, annual_attendance = $2 WHERE park_id = $3 RETURNING *`,
      values
    )
    .then((result) => {
      return result.rows[0];
    });
};

exports.removeParkById = (parkId) => {
  return db
    .query(`DELETE FROM parks WHERE park_id = $1`, [parkId])
    .then((result) => {
      return result.rows[0];
    });
};
