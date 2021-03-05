const apiRouter = require('express').Router();
const parksRouter = require('./parks');

apiRouter.use('/parks', parksRouter);

module.exports = apiRouter;
