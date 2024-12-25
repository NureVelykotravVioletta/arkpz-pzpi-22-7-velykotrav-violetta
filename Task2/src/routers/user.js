import { Router } from 'express';

import ctrlWrapper from '../utils/ctrlWrapper.js';
import { authenticate } from '../middlewares/authenticate.js';
import {
  getUserInfoController,
  addUserPhotoController,
  patchUserController,
} from '../controllers/user.js';
import { userUpdateValidationSchema } from '../validation/user.js';
import { upload } from '../middlewares/multer.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = Router();

router.use('/', authenticate);

router.get('/info', ctrlWrapper(getUserInfoController));
router.patch(
  '/userPhoto',
  upload.single('userPhoto'),
  ctrlWrapper(addUserPhotoController),
);
router.patch(
  '/updateInfo',
  validateBody(userUpdateValidationSchema),
  ctrlWrapper(patchUserController),
);

export default router;
