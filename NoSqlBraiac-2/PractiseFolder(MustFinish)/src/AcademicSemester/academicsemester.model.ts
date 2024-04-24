import { Schema, model } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface.";
import {
  AcademicNameNew,
  AcademicSemesterCode,
  AcademicSemesterMonth,
  TAcademicCode,
  TAcademicName,
  TMonth
} from "../constants/academicSemester.contsnts";

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: Object.values(AcademicNameNew)
    },
    year: {
      type: String
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode
    },
    endMonth: {
      type: String,
      enum: AcademicSemesterMonth
    },

    startMonth: {
      type: String,
      enum: AcademicSemesterMonth
    }
  },
  {
    timestamps: true
  }
);

academicSemesterSchema.pre("save", async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    name: this.name,
    year: this.year
  });

  if (isSemesterExists) {
    throw new Error("Semester already exists");
  }
  next();
});

export const AcademicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema
);
