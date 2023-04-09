import BaseError from './base.error.js';

class FormatError extends BaseError {
  constructor() {
    super(400, 'Bad Request - Param cast error ');
  }
}

export default FormatError;
