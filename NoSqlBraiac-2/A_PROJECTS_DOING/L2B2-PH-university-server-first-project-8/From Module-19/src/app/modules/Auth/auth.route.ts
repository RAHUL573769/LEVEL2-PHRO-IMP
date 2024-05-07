import express from 'express';
import { AuthController } from './auth.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constants';

const router = express.Router();

router.post('/login', AuthController.loginUser);
router.post(
  '/change-password',
  auth(USER_ROLE.student, USER_ROLE.admin, USER_ROLE.faculty),
  AuthController.changePassword,
);

export const AuthRoutes = router;
