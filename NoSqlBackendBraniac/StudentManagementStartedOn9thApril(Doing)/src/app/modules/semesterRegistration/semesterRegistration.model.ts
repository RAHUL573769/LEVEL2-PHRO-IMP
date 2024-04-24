/* eslint-disable no-unused-vars */
import mongoose, { Schema } from 'mongoose';

import { TSemesterRegistration } from './semesterRegistration.interface';
import { SemesterRegistrationStatus } from './semesterRegisration.constants';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const semesterRegistrationSchema = new mongoose.Schema<TSemesterRegistration>(
  {
    academicSemester: {
      unique: true,
      required: true,
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
    },
    status: {
      type: String,
      enum: {
        values: SemesterRegistrationStatus,
      },
      default: 'UPCOMING',
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
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
