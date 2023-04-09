import BaseError from './BaseError.js';

class FormatError extends BaseError {
  constructor() {
    super(400, 'Bad Request - Param cast error ');
  }
}

export default FormatError;
