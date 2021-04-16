const { selectParks } = require('../models/parks.js');

exports.getParks = (req, res) => {
  selectParks().then(() => {
    /**
     * implement the selectParks model function and complete the controller
     * by responding with the parks to pass the first set of tests
     */
  });
};

exports.getParkById = () => {};

exports.postPark = () => {};

exports.removeParkById = () => {};

exports.patchParkById = () => {};
