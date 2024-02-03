import { Router } from 'express';
import {
  authorizePermission,
  validateToken,
} from '../middlewares/authMiddleware';
import {
  getBooks,
  postBook,
} from '../controllers/bookController';
import { Permission } from '../../database/auth-seeds';

const router = Router();

router.use(validateToken);

router.get('/', getBooks);
// router.get('/:id', getBooks);
router.post(
  '/',
  authorizePermission(Permission.ADD_BOOK) as any,
  postBook
);


export default router;
