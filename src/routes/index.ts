import { Router } from 'express';

import * as pageController from '../controller/pageController.ts';
import * as SearchController from '../controller/searchController.ts';

const router = Router();

router.get('/', pageController.home);
router.get('/dogs', pageController.dogs);
router.get('/cats', pageController.cats);
router.get('/fishes', pageController.fishes);

router.get('seach', SearchController.search);

export default router;
