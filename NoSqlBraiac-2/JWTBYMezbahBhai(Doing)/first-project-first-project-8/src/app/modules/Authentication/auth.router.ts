import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validations';
import { AuthControllers } from './auth.controller';
import { USER_ROLE } from '../user/user.constants';
import { auth } from '../../middlewares/authMiddleWares';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginAuthentication),
  AuthControllers.loginUser,
);
router.post(
  '/change-password',
  auth(USER_ROLE.admin, USER_ROLE.faculty, USER_ROLE.student),
  validateRequest(AuthValidation.changePasswordValidation),
  AuthControllers.changedPassword,
);
export const AuthRoutes = router;
