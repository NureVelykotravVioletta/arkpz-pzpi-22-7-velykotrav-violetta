import authRouter from './auth.js';
import userRouter from './user.js';

import { Router } from 'express';

const router = Router();

router.use('/user', userRouter);
router.use('/auth', authRouter);

export default router;
