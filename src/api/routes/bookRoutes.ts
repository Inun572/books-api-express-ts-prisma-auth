import { Router } from 'express';
import {
  authorizePermission,
  validateToken,
} from '../middlewares/authMiddleware';
import {
  getBooks,
  getBooksById,
  postBook,
} from '../controllers/bookController';
import { bookParamsValidator } from '../validators/bookValidator';
import { Permission } from '../../database/auth-seeds';

const router = Router();

router.get('/', getBooks);
router.get('/:id', bookParamsValidator, getBooksById);

router.use(validateToken);
router.post(
  '/',
  authorizePermission(Permission.ADD_AUTHOR),
  postBook
);

export default router;
