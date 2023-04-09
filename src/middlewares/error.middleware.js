import mongoose from 'mongoose';
import BaseError from '../Errors/BaseError.js';
import ValidationError from '../Errors/ValidationError.js';
import FormatError from '../Errors/FormatError.js';

function errorHandler(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    new FormatError().sendResponse(res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    new ValidationError(err).sendResponse(res);
  } else {
    new BaseError().sendResponse(res);
  }
}

export default errorHandler;
