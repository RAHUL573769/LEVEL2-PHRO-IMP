import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyValidation } from './academic.validation';
import { AcademicFacultyControllers } from './academic.controller';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(academicFacultyValidation.academcFacultyValidation),
  AcademicFacultyControllers.createAcademicFaculty,
);

router.get('/:semesterId', AcademicFacultyControllers.getSingleAcademicFaculty);

router.patch(
  '/:semesterId',
  validateRequest(academicFacultyValidation.updateacademcFacultyValidation),
  AcademicFacultyControllers.updateAcademicFaculty,
);

router.get('/', AcademicFacultyControllers.getAllAcademicFaculty);

export const AcademicFacultyRoutes = router;
