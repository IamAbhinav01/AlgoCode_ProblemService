const BaseError = require('./Base.err');
const { StatusCodes } = require('http-status-codes');
class NotImplemented extends BaseError {
  constructor(methodName) {
    super(
      'Not Implemented',
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} Not implemented`,
      {}
    );
  }
}
module.exports = NotImplemented;
