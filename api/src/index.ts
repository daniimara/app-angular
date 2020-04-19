import { json, urlencoded } from 'body-parser';
import * as cors from 'cors';
import { config } from 'dotenv';
import { Application, NextFunction, Request, Response, ErrorRequestHandler } from 'express';
import * as express from 'express';
import * as jwt from 'express-jwt';
import { connect } from 'mongoose';
import { cpus } from 'os';
import { initialize } from 'passport';
import * as throng from 'throng';

import { unlessPath } from './helpers/unlessPath';
import { allRoutes } from './routes';

// import * as morgan from 'morgan';

const server: Application = express();

const PORT = process.env.PORT || 3000;
const WORKERS = process.env.WEB_CONCURRENCY || cpus().length;

//if (process.env.NODE_ENV === 'devel') {
  config();
  const morgan = require('morgan');
  server.use(morgan('dev'));
//}

throng({
  workers: WORKERS,
  lifetime: Infinity,
  start
});

function start(id: number) {
  server.use(urlencoded({ extended: true }));
  server.use(json());

  server.use(cors());
  server.use(initialize());

  server.use(jwt({ secret: `${process.env.JWT_SECRET}` }).unless(unlessPath));

  server.use(
    (
      err: ErrorRequestHandler,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      if (err.name === 'UnauthorizedError') {
        res.status(401).json(err);
      }
      next();
    }
  );

  allRoutes(server);

  connect(`${process.env.MONGODB}`).then(
    () => console.log(`MongoDB Ok`),
    err => console.log(err)
  );

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} over ${id} cores`);
  });
}
