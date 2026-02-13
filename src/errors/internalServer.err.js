const BaseError = require('./Base.err');
const { StatusCodes } = require('http-status-codes');
class InternalServerError extends BaseError {
  constructor(propertyName, details) {
    super(
      'InternalServerError',
      StatusCodes.InternalServerError,
      `Something went wrong`,
      details
    );
  }
}
module.exports = InternalServerError;
