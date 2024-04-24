import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
// import { createStudentValidationSchema } from './../student/student.validation';
import { UserControllers } from './user.controller';
import { studentValidations } from '../student/student.validation';
// import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
