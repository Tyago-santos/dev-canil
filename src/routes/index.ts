import { Router } from 'express';

import * as pageController from '../controller/pageController.js';
import * as SearchController from '../controller/searchController.js';
import * as authController from '../controller/authController.js';
import * as adoptController from '../controller/adoptController.js';

const router = Router();

router.get('/', pageController.home);
router.get('/dogs', pageController.dogs);
router.get('/cats', pageController.cats);
router.get('/fishes', pageController.fishes);

router.get('/search', SearchController.search);
router.get('/login', authController.login);
router.post('/login_action', authController.loginAction);
router.get('/register', authController.register);
router.get('/adopt', adoptController.form);

export default router;
