import { Router } from 'express';
import { validateToken } from '../validators/authValidator';
import { getBooks } from '../controllers/bookController';

const router = Router();

router.get('/', validateToken, getBooks as any);

export default router;
