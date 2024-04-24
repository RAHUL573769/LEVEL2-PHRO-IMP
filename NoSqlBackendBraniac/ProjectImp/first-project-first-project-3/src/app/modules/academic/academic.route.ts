// import express, { Request, Response, NextFunction } from 'express';
// import { AcademicSemesterControllers } from './academic.controller';
// import { AcademicSemesterValidation } from './academicavalidation';
// import { AnyZodObject } from 'zod';
// const router = express.Router();
// const validateRequest = (schema: AnyZodObject) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await schema.parseAsync({
//         body: req.body,
//       });
//       next();
//     } catch (error) {
//       next(error);
//     }
//   };
// };
// router.post(
//   '/create-academic-semester',
//   validateRequest(AcademicSemesterValidation.acdemicSemesterValidationSchema),
//   AcademicSemesterControllers.createAcademic,
// );
