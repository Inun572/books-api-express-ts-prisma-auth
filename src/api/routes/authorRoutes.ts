import { Router } from 'express';
import {
  editAuthor,
  getAllAuthors,
  postAuthor,
} from '../controllers/authorController';
import {
  authorizePermission,
  validateToken,
} from '../middlewares/authMiddleware';
import {
  authorParamsValidator,
  authorValidator,
} from '../validators/authorValidator';
import { Permission } from '../../database/auth-seeds';

const router = Router();

router.get('/', getAllAuthors);
// router.get('/:id', getAllAuthors);

router.use(validateToken);
router.use(authorValidator);

router.post(
  '/',
  authorizePermission(Permission.ADD_AUTHOR),
  postAuthor
);
router.put(
  '/:id',
  authorParamsValidator,
  authorizePermission(Permission.EDIT_AUTHOR),
  editAuthor
);

export default router;
