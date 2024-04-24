import { Types } from 'mongoose';

export type OfferedCouseDays = 'Sat' | 'sunday' | 'Monday';
export type TOfferedCourse = {
  semesterRegistration: Types.ObjectId;
  academicSemester: Types.ObjectId;
  academicFaculy: Types.ObjectId;
  academicDepartMent: Types.ObjectId;
  course: Types.ObjectId;
  faculty: Types.ObjectId;
  maxCapacity: number;

  section: number;
  days: OfferedCouseDays;
  startTime: string;
  endTime: string;
};
