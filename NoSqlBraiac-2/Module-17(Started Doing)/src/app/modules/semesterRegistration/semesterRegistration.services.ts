import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TSemesterRegistration } from './semesterRegistration.interface';
import { SemesterRegistration } from './semesterRegistration.model';

const create = async (payload: TSemesterRegistration) => {
  const academicSemester = payload?.academicSemester;

  //check if the semester is exists
  const isAcademicSemesterExists =
    await AcademicSemester.findById(academicSemester);
  if (!isAcademicSemesterExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Academic Semester Not Found');

    //check if semester is Already Registered
    const isSemesterRegistrationExists =
      await SemesterRegistration.findOne(academicSemester);

    if (isSemesterRegistrationExists) {
      throw new AppError(
        httpStatus.CONFLICT,
        'The semester is Already Registeres',
      );
    }
    const result = await SemesterRegistration.create(payload);
    return result;
  }
};
export const SemesterRegistrationServices = { create };
