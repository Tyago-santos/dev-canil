import type { Response, Request } from 'express';

import zod from 'zod';

import createMenuObject from '../helpers/createMenuObject.js';
import AuthRepository from '../repository/authController.ts';
import Hash from '../utils/hash.ts';

const authRepository = new AuthRepository();
const authHash = new Hash();

export const login = (req: Request, res: Response) => {
  const flash = req.flash('error');
  res.render('auth/login', {
    message: flash,
    menu: createMenuObject(''),
    extraCss: '/css/auth.css',
  });
};

export const loginAction = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email, password, 'body');
  const validateLogin = zod.object({
    email: zod.email('Email inválido'),
    password: zod.string().min(1, 'Senha obrigatória'),
  });

  const result = validateLogin.safeParse({ email, password });

  if (!result.success) {
    const message = result.error.issues.map(issue => issue.message).join(', ');
    req.flash('error', message);
    return res.redirect('/login');
  } else {
    const user = await authRepository.getByEmail(email);
    const compareUserPassword = user?.password
      ? authHash.comparePassword(password, user.password)
      : false;

    if (user?.email) {
      if (compareUserPassword) {
        res.redirect('/');
        req.session.user = user;
      }
      res.redirect('/login');
    }
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
export const registerAction = (req: Request, res: Response) => {
  const flash = req.flash('error');
  res.render('auth/register', {
    message: flash,
    menu: createMenuObject(''),
    extraCss: '/css/auth.css',
  });
};
