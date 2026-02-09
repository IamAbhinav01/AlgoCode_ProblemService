const express = require('express');
const v1Router = require('./v1');
const apiRouter = express.Router();

// Mount v1 routes at /api/v1 (working)
apiRouter.use('/v1', v1Router);

module.exports = apiRouter;
