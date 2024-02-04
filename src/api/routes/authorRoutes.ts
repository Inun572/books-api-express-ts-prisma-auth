import { Router } from 'express';
import {
  getAllAuthors,
  postAuthor,
} from '../controllers/authorController';
import {
  authorizePermission,
  validateToken,
} from '../middlewares/authMiddleware';

const router = Router();

router.get('/', getAllAuthors);
router.post(
  '/',
  validateToken,
  authorizePermission('ADD_AUTHOR'),
  postAuthor
);

export default router;
