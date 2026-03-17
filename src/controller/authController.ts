import type { Response, Request } from 'express';
import createMenuObject from '../helpers/createMenuObject.js';
// import AuthRepository from '../repository/authController.ts';
import zod from 'zod';

// const authRepository = new AuthRepository();

export const login = (req: Request, res: Response) => {
  const flash = req.flash('error');
  res.render('auth/login', {
    message: flash,
    menu: createMenuObject(''),
    extraCss: '/css/auth.css',
  });
};

export const loginAction = (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email, password, 'body');
  const validateLogin = zod.object({
    email: zod.email('Email inválido'),
    password: zod.string(),
  });

  const { error } = validateLogin.safeParse({ email, password });

  console.log(error);

  if (error) {
    req.flash('error', error.message);
    res.redirect('/login');
  }
};

export const register = (req: Request, res: Response) => {
  const flash = req.flash('error');
  res.render('auth/register', {
    message: flash,
    menu: createMenuObject(''),
    extraCss: '/css/auth.css',
  });
};
