import type { Response, Request } from 'express';
import { data } from '../model/pets.ts';
import createMenuObject from '../helpers/createMenuObject.js';

interface QueryName {
  q: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const search = (req: Request<{}, {}, {}, QueryName>, res: Response) => {
  const { q } = req.query;
  const list = data.getFromName(q);

  if (!q) {
    res.redirect('/');
    return;
  }

  res.render('page/page', {
    menu: createMenuObject(''),
    list,
    q,
  });
};
