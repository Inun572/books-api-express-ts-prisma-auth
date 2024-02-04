import { Router } from 'express';
import {
  getUsers,
  login,
} from '../controllers/authController';
import { validateLoginRequest } from '../validators/authValidator';

const router = Router();

router.get('/users', getUsers);
router.post('/login', validateLoginRequest, login);

export default router;
