import type { RequestHandler } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const notFound: RequestHandler = (req, res) => {
  res.send('<h1>pagina não encontrada</h1>');
};
