import NotFoundError from '../Errors/not-found.error.js';

function notFoundHandler(req, res, next) {
  const error = new NotFoundError();
  next(error);
}

export default notFoundHandler;
