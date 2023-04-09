import BaseError from './BaseError.js';

class ValidationError extends BaseError {
  constructor(err) {
    const errorMessages = Object.values(err.errors)
      .map((error) => error.message)
      .join('; ');
    super(400, `Bad Request - Validation error: ${errorMessages}`);
  }
}

export default ValidationError;
