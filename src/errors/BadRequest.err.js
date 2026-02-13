const BaseError = require('./Base.err');
const { StatusCodes } = require('http-status-codes');
class BadRequest extends BaseError {
  constructor(propertyName, details) {
    super(
      'BadRequest',
      StatusCodes.BadRequest,
      `Invalid structure for ${propertyName} provided`,
      details
    );
  }
}
module.exports = BadRequest;
