import { Router } from 'express';

import * as pageController from '../controller/pageController.js';
import * as SearchController from '../controller/searchController.js';

const router = Router();

router.get('/', pageController.home);
router.get('/dogs', pageController.dogs);
router.get('/cats', pageController.cats);
router.get('/fishes', pageController.fishes);

router.get('/search', SearchController.search);

export default router;
