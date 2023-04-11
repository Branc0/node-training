import mongoose from 'mongoose';
import BaseError from '../Errors/base.error.js';
import ValidationError from '../Errors/validation.error.js';
import FormatError from '../Errors/format.error.js';

function errorHandler(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    new FormatError().sendResponse(res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    new ValidationError(err).sendResponse(res);
  } else if (err instanceof BaseError) {
    err.sendResponse(res);
  } else {
    new BaseError().sendResponse(res);
  }
}

export default errorHandler;
