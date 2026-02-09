const express = require('express');
const problemRouter = require('./problems.routes');
const v1Router = express.Router();

// Mount problems routes at /api/v1/problems (working)
v1Router.use('/problems', problemRouter);

module.exports = v1Router;
