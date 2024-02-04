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
import { authorValidator } from '../validators/authorValidator';

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
  authorizePermission(Permission.EDIT_AUTHOR),
  editAuthor
);

export default router;
