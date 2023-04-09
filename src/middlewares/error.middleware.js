import mongoose from 'mongoose';

function errorHandler(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    res.status(400).send({ message: 'Incorrect data' });
  } else if (err instanceof mongoose.Error.ValidationError) {
    const errorMessages = Object.values(err.errors)
      .map((error) => error.message)
      .join('; ');
    res.status(400).send({
      message: `Validation error: ${errorMessages}`,
    });
  } else {
    res.status(500).send({ message: 'Internal server error' });
  }
}

export default errorHandler;
