import { Types } from 'mongoose';
import { semesterStatus } from './studentRegistrstionConstants';

export type TSemesterRegistration = {
  academicSemester: Types.ObjectId;

  status: semesterStatus;
  startDate: Date;
  endDate: Date;
  minCredit: number;
  maxCredit: number;
};
