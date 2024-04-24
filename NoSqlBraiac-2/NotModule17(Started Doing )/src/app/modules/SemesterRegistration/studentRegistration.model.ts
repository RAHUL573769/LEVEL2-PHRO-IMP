import mongoose from 'mongoose';
import { TSemesterRegistration } from './studentRegistration.interface';
import { Schema } from 'mongoose';
import { StudentRegistrationStatus } from './studentRegistrstionConstants';

const semesterRegistrationSchema = new mongoose.Schema<TSemesterRegistration>(
  {
    academicSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
      unique: true,
    },
    status: {
      type: String,
      enum: {
        values: StudentRegistrationStatus,
      },
      default: 'Upcoming',
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    minCredit: {
      type: Number,
      default: 3,
    },
    maxCredit: {
      type: Number,
      default: 15,
    },
  },
  {
    timestamps: true,
  },
);

export const SemesterRegistration = mongoose.model<TSemesterRegistration>(
  'SemesterRegistration',
  semesterRegistrationSchema,
);
