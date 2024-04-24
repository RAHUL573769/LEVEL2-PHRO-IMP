import mongoose from 'mongoose';

export type academicStatus = 'UPCOMING' | 'ONGOING' | 'ENDED';
export type TSemesterRegistration = {
  academicSemester: mongoose.Types.ObjectId;
  status: academicStatus;
  startDate: Date;
  endDate: Date;
  maxCredit: number;
  minCredit: number;
};
