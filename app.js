const express = require('express');
const app = express();

const {
  getParks,
  getParkById,
  removeParkById,
  postPark,
  patchParkById,
} = require('./controllers/parks');

app.route('/api/parks').get(getParks).post(postPark);

app
  .route('/api/parks/:park_id')
  .get(getParkById)
  .delete(removeParkById)
  .patch(patchParkById);

app.all('/*', (req, res) => {
  res.status(404).send({ msg: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.sendStatus(500);
});

module.exports = app;
