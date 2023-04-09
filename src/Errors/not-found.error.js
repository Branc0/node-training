import BaseError from './base.error.js';

class NotFoundError extends BaseError {
  constructor() {
    super(404, 'Not Found');
  }
}

export default NotFoundError;
