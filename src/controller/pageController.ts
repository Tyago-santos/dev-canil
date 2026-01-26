import type { Response, Request } from 'express';
import createMenuObject from '../helpers/createMenuObject.js';

import { data } from '../mode/pets.js';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const home = (req: Request, res: Response) => {
  const list = data.getAllPets();
  res.render('page/page', {
    menu: createMenuObject('all'),
    banner: {
      title: 'Animais',
      background: 'allanimals.jpg',
    },
    list,
  });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const dogs = (req: Request, res: Response) => {
  const list = data.getFromType('dog');

  res.render('page/page', {
    menu: createMenuObject('dog'),
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg',
    },
    list,
  });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const cats = (req: Request, res: Response) => {
  const list = data.getFromType('cat');
  res.render('page/page', {
    menu: createMenuObject('cat'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg',
    },
    list,
  });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fishes = (req: Request, res: Response) => {
  const list = data.getFromType('fish');
  res.render('page/page', {
    menu: createMenuObject('fish'),
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg',
    },
    list,
  });
};
