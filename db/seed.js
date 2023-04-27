const { parks, rides, stalls } = require("./data/index.js");
const format = require("pg-format");
const db = require("./connection");
const {
  arrangeParksData,
  arrangeRidesData,
  prepareRidesData,
} = require("../utils.js");

function seed() {
  return db
    .query("DROP TABLE IF EXISTS rides;")
    .then(() => {
      return db.query("DROP TABLE IF EXISTS stalls;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS foods;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS stalls_foods;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS parks;");
    })
    .then(() => {
      return createParks();
    })
    .then(() => {
      return createRides();
    })
    .then(() => {
      return insertParks(parks);
    })
    .then((parksData) => {
      return insertRides(rides, parksData);
    });
}

function createParks() {
  /* Create your parks table in the query below */
  return db.query(`CREATE TABLE parks (
  park_id SERIAL PRIMARY KEY,
  park_name VARCHAR NOT NULL,
  year_opened INT NOT NULL,
  annual_attendance INT NOT NULL
);`);
}

function createRides() {
  return db.query(`CREATE TABLE rides (
    ride_id SERIAL PRIMARY KEY,
    park_id INT REFERENCES parks(park_id) ON DELETE CASCADE,
    ride_name VARCHAR NOT NULL,
    year_opened INT NOT NULL,
    votes INT DEFAULT 0
  );`);
}

function insertParks(parks) {
  const values = arrangeParksData(parks);
  const formatStr = format(
    "INSERT INTO %I (park_name, year_opened, annual_attendance) VALUES %L RETURNING *;",
    "parks",
    values
  );

  return db.query(formatStr).then((result) => {
    return result.rows;
  });
}

function insertRides(rides, parks) {
  const modifiedRidesData = prepareRidesData(rides, parks);
  // console.log(modifiedRidesData, "modified");
  const values = arrangeRidesData(modifiedRidesData);
  const formatStr = format(
    "INSERT INTO %I (ride_name, year_opened, park_id,votes) VALUES %L RETURNING *;",
    "rides",
    values
  );

  return db.query(formatStr).then((result) => {
    return result.rows;
  });
}
module.exports = { seed };
