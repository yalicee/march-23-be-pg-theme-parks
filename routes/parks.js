const parksRouter = require('express').Router();
const {
  getParks,
  getParkById,
  removeParkById,
  postPark,
  patchParkById,
} = require('../controllers/parks');

parksRouter.route('/').get(getParks).post(postPark);

parksRouter
  .route('/:park_id')
  .get(getParkById)
  .delete(removeParkById)
  .patch(patchParkById);

module.exports = parksRouter;
