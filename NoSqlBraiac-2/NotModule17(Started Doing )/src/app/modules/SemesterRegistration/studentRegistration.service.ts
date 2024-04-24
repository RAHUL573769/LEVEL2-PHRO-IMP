import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TSemesterRegistration } from './studentRegistration.interface';
import { SemesterRegistration } from './studentRegistration.model';

const createSemesterRegistrationIntoDB = async (
  payload: TSemesterRegistration,
) => {
  const academicSemester = payload?.academicSemester;

  const isThereAnyUpcomingorOngoingSemester =
    await SemesterRegistration.findOne({
      $or: [{ status: 'Upcoming' }, { status: 'Ongoing' }],
    });

  if (isThereAnyUpcomingorOngoingSemester) {
    throw new Error('There os a already semester of this status');
  }
  const isAcademicSemesterExists =
    await AcademicSemester.findById(academicSemester);

  if (!isAcademicSemesterExists) {
    throw new Error('This Semester Not FOUND');
  }
  const isSemesterRegistrationExists = await SemesterRegistration.findOne({
    academicSemester,
  });

  if (isSemesterRegistrationExists) {
    throw new Error('This SemesterAlready Registerd');
  }

  const result = await SemesterRegistration.create(payload);
  return result;
};

const getAllSemesterRegistrationFromDB = async () => {
  const result = await SemesterRegistration.find();
  return result;
};

const getSingleSemesterRegistrationFromDB = async (id: string) => {
  const result = await SemesterRegistration.findById(id);
  return result;
};

const updateSemesterRegistrationIntoDB = async (
  id: string,
  payload: Partial<TSemesterRegistration>,
) => {
  const isSemesterRegistrationExists = await SemesterRegistration.findById(id);

  if (!isSemesterRegistrationExists) {
    throw new Error('This semeste is not Found');
  }
  const currentSemesterStatus = isSemesterRegistrationExists?.status;
  const requestedStatus = payload?.status;
  if (currentSemesterStatus === 'Ended') {
    throw new Error('This semester already Ended');
  }
  // upcomg---->ongoing----->ended

  if (currentSemesterStatus === 'Ongoing' && requestedStatus === 'Upcoming') {
    throw new Error('You cannot change status for Upcoming and Ongoing`1');
  }

  if (currentSemesterStatus === 'Ongoing' && requestedStatus === 'Ended') {
    throw new Error('You cannot change status');
  }
  const result = await SemesterRegistration.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const SemesterRegistrationServices = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationFromDB,
  getSingleSemesterRegistrationFromDB,
  updateSemesterRegistrationIntoDB,
};
