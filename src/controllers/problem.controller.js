const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.err');

// Ping controller function - returns status (working)
function pingProblemChecker(req, res) {
  return res.json({ message: 'Ping controller is up' });
}

// Add a new problem (working)
function addProblem(req, res, next) {
  try {
    throw new NotImplemented();
  } catch (err) {
    next(err);
  }
}

// Get a specific problem by ID (working)
function getProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: 'Not implemented',
  });
}

// Get all problems (working)
function getProblems(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: 'Not implemented',
  });
}

// Delete a problem by ID (working)
function deleteProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: 'Not implemented',
  });
}

// Update a problem by ID (working)
function updateProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: 'Not implemented',
  });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemChecker,
};
