import { Router } from 'express';
import {
  authorizePermission,
  validateToken,
} from '../middlewares/authMiddleware';
import {
  getBooks,
  postBook,
} from '../controllers/bookController';

const router = Router();

router.use(validateToken);

router.get('/', getBooks);
// router.get('/:id', getBooks);
router.post(
  '/',
  authorizePermission(Permission.ADD_BOOK),
  postBook
);

export default router;
