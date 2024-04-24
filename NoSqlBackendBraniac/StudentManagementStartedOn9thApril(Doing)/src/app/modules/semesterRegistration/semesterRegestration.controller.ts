/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TSemesterRegistration } from './semesterRegistration.interface';
import { SemesterRegistration } from './semesterRegistration.model';

// eslint-disable-next-line no-unused-vars
const createSemesterRegistrationIntoDb = async (
  payload: TSemesterRegistration,
) => {
  try {
    const academicSemester = payload?.academicSemester;

    const isSemesterRegistrationExists = await SemesterRegistration.findOne({
      academicSemester,
    });
    //check if academic semester exists

    if (isSemesterRegistrationExists) {
      throw new AppError(
        httpStatus.CONFLICT,
        'This Semester is Already Registered',
      );
    }

    const isAcademicSemesterExists =
      await AcademicSemester.findById(academicSemester);
    if (isAcademicSemesterExists) {
      throw new AppErrorError();
    }
  } catch (error) {
    console.log(error);
  }
};
