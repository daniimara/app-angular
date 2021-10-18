import { Application, NextFunction, Request, Response } from 'express';

import { accessRoutes } from './modules/access/routes';
import UsersRoutes from './modules/users/routes';

const urlBase = '/api/v1';

export const allRoutes = (server: Application) => {
  server.use(`${urlBase}/`, accessRoutes);
  server.use(`${urlBase}/users`, UsersRoutes);

  server.use(`/`, (req: Request, res: Response, next: NextFunction) => {
    const msg = {
      statusCode: 200,
      message: `API available`,
      route: req.originalUrl
    };

    res.status(200).json(msg);
  });

  server.use((req: Request, res: Response, next: NextFunction) => {
    const defaultError = {
      statusCode: 500,
      message: `Error on route. This route exist?`,
      route: req.originalUrl
    };

    res.status(500).json(defaultError);
    next();
  });
};
