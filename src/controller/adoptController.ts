import type { Request, Response } from 'express';
import createMenuObject from '../helpers/createMenuObject.js';

export const form = (req: Request, res: Response) => {
  res.render('adopt/form', {
    menu: createMenuObject(''),
    extraCss: '/css/auth.css',
    petName: req.query.name ?? '',
    petBreed: req.query.breed ?? '',
    petSex: req.query.sex ?? '',
    petColor: req.query.color ?? '',
  });
};
