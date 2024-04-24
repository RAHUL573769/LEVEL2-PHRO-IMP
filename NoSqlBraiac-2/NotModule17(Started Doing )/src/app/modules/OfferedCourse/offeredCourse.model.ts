import mongoose, { Schema } from 'mongoose';
import { OfferedCouseDays, TOfferedCourse } from './offerCourse.interface';

const OfferedCourseDates: OfferedCouseDays[] = ['Monday', 'Sat', 'sunday'];
const offeredCourseSchema = new mongoose.Schema<TOfferedCourse>({
  semesterRegistration: {
    type: Schema.Types.ObjectId,
    ref: 'SemesterRegistration',
  },

  academicSemester: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicSemester',
  },
  academicFaculy: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicFaculty',
  },
  academicDepartMent: {
    type: Schema.Types.ObjectId,
    ref: 'AcademicDepartment',
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
  },
  faculty: {
    type: Schema.Types.ObjectId,
    ref: 'Faculty',
  },
  maxCapacity: {
    type: Number,
    default: 10,
  },
  section: {
    type: Number,
  },
  days: {
    type: String,
    enum: {
      values: OfferedCourseDates,
    },
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
});

export const OfferedCourse = mongoose.model<TOfferedCourse>(
  'Offered Course',
  offeredCourseSchema,
);
