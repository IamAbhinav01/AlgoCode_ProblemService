const express = require('express');

const { ProblemController } = require('../../controllers');

const problemRouter = express.Router();

// GET /api/v1/problems/ping - Ping the problems service (working)
problemRouter.get('/ping', ProblemController.pingProblemChecker);

// GET /api/v1/problems/:id - Get a specific problem by ID (working)
problemRouter.get('/:id', ProblemController.getProblem);

// GET /api/v1/problems - Get all problems (working)
problemRouter.get('/', ProblemController.getProblems);

// POST /api/v1/problems - Add a new problem (working)
problemRouter.post('/', ProblemController.addProblem);

// DELETE /api/v1/problems/:id - Delete a problem by ID (working)
problemRouter.delete('/:id', ProblemController.deleteProblem);

// PUT /api/v1/problems/:id - Update a problem by ID (working)
problemRouter.put('/:id', ProblemController.updateProblem);

module.exports = problemRouter;
