import { Router } from 'express';

import * as pageController from '../controller/pageController.js';
import * as SearchController from '../controller/searchController.js';
import * as authController from '../controller/authController.js';
import * as adoptController from '../controller/adoptController.js';
import { authRouter } from '../middleware/autMiddleware.ts';
import { upload } from '../utils/multer.ts';

const router = Router();

router.get('/login', authController.login);
router.post('/login_action', authController.loginAction);
router.get('/register', authController.register);
router.post('/register_action', authController.registerAction);

router.use(authRouter);

router.get('/', pageController.home);
router.get('/dogs', pageController.dogs);
router.get('/cats', pageController.cats);
router.get('/fishes', pageController.fishes);

router.get('/adopt', adoptController.adopt);
router.get('/adopt/pets', upload.single('petPhoto'), adoptController.adoptPets);
router.post(
  '/adopt_action',
  upload.single('petPhoto'),
  adoptController.adoptAction
);
router.get('/search', SearchController.search);

export default router;
