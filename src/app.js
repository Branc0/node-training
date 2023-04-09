import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';
import errorHandler from './middlewares/error.middleware.js';

db.on('error', () => {
  console.log.bind(console, 'Error while trying to connect into database');
});
db.once('open', () => {
  console.log('database connected ');
});

const app = express();
routes(app);

app.use(errorHandler);

export default app;
