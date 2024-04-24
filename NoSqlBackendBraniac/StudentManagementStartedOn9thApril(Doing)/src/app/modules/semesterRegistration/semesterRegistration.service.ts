import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TSemesterRegistration } from './semesterRegistration.interface';
import { SemesterRegistration } from './semesterRegistration.model';

const createSemesterRegistration = async (payLoad: TSemesterRegistration) => {
  const academicSemester = payLoad?.academicSemester;
  const isSemesterRegistrationExists = await SemesterRegistration.findOne({
    academicSemester,
  });

  const isAcademicSemesterExists =
    await AcademicSemester.findById(academicSemester);
  if (!isAcademicSemesterExists) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This Academic Semester Not Found',
    );
  }
};

const geAllSemesterRegistration = () => {};
const getSingleSemesterRegistration = () => {};

const updateSemesterRegistration = () => {};

export const SemesterRegistrationService = {
  createSemesterRegistration,
  geAllSemesterRegistration,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
};
