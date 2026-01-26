import type { Response, Request } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const home = (req: Request, res: Response) => {
  res.send('home no controller');
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const dogs = (req: Request, res: Response) => {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const cats = (req: Request, res: Response) => {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fishes = (req: Request, res: Response) => {};
