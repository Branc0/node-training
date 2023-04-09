import mongoose from 'mongoose';
import BaseError from '../Errors/base.error.js';
import ValidationError from '../Errors/validation.error.js';
import FormatError from '../Errors/format.error.js';
import NotFoundError from '../Errors/not-found.error.js';

function errorHandler(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    new FormatError().sendResponse(res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    new ValidationError(err).sendResponse(res);
  } else if (err instanceof NotFoundError) {
    err.sendResponse(res);
  } else {
    new BaseError().sendResponse(res);
  }
}

export default errorHandler;
