import type { Response, Request } from 'express';

import zod from 'zod';

import createMenuObject from '../helpers/createMenuObject.js';
import AuthRepository from '../repository/authRepository.ts';
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

  const validateLogin = zod.object({
    email: zod.email('Email inválido'),
    password: zod.string('Senha obrigatória'),
  });

  const result = validateLogin.safeParse({ email, password });

  if (!result.success) {
    const message = result.error.issues.map(issue => issue.message).join(', ');
    req.flash('error', message);
    return res.redirect('/login');
  }
  const user = await authRepository.getByEmail(email);
  if (!user) {
    req.flash('error', 'Você não possui cadastro');
    return res.redirect('/login');
  }

  const compareUserPassword = await authHash.comparePassword(
    password,
    user.password
  );

  if (!compareUserPassword) {
    req.flash('error', 'Senha inválida');
    return res.redirect('/login');
  }

  req.session.user = user;

  return res.redirect('/');
};

export const register = (req: Request, res: Response) => {
  const flash = req.flash('error');
  res.render('auth/register', {
    message: flash,
    menu: createMenuObject(''),
    extraCss: '/css/auth.css',
  });
};
export const registerAction = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  const validateRegister = zod.object({
    name: zod.string().min(2, 'Nome precisa ter no minimo 2 caracteres'),
    email: zod.string().email('Email inválido'),
    password: zod.string().min(1, 'Senha obrigatória'),
  });

  const result = validateRegister.safeParse({ name, email, password });

  if (!result.success) {
    const message = result.error.issues.map(issue => issue.message).join(', ');
    req.flash('error', message);
    return res.redirect('/register');
  }

  const user = await authRepository.getByEmail(email);
  if (user?.email) {
    req.flash('error', 'Email já existe');
    return res.redirect('/register');
  }

  const hashedPassword = await authHash.hashPassword(password);

  await authRepository.createUser(name, email, hashedPassword);

  req.session.user = {
    name,
    email,
    id: Number(user?.id),
  };
  return res.redirect('/');
};
