import type { NextFunction, Request, Response } from 'express';

export const authRouter = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }

  next();
};
