import { Router } from 'express';
import authRoutes from './routes/authRoutes';
import bookRoutes from './routes/bookRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/protected', bookRoutes);

export default router;
