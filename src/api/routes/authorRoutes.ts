import { Router } from 'express';
import {
  getAllAuthors,
  postAuthor,
} from '../controllers/authorController';

const router = Router();

router.get('/', getAllAuthors);
router.post('/', postAuthor);

export default router;
