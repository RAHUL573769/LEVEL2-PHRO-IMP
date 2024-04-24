import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createSemesterRegistrationValidation } from './studentRegistration.validation';
import { SemesterRegistrationControllers } from './studentRegistration.controller';

const router = express.Router();

router.post(
  '/create-semester-registration',
  validateRequest(createSemesterRegistrationValidation),
  SemesterRegistrationControllers.createSemesterRegistration,
);

export const SemesterRegistrationRoutes = router;
