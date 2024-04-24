import { Schema, model } from "mongoose";
import {
  StudentInterface2,
  guardian,
  studentInterface,
  studentName
} from "./student.interface";

const studentNameSchema = new Schema<studentName>({
  firstName: {
    type: String
    // required: true
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String
    // required: true
  }
});

export const quardianSchema = new Schema<guardian>({
  firstName: String,
  middleName: String,
  lastName: String
});

export const studentSchema = new Schema<studentInterface>({
  id: {
    type: String,
    // required: [true, "Id is Required"],
    unique: true
  },
  password: {
    type: String
  },

  user: {
    type: Schema.Types.ObjectId,
    unique: true,
    ref: "User"
  },
  name: {
    type: String,
    name: studentNameSchema
  },
  gender: {
    type: String,
    enum: {
      values: ["Male", "Female"]
    }
  },
  dateOfBirth: {
    type: String
  },
  email: {
    type: String
    // required: [true, "Email is Required"]
  },
  contactNumber: {
    type: String
  },
  emergencyContactNumber: {
    type: String
    // required: [true, "This is Needed"]
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "A-"]
    }
  },
  presentAddress: {
    type: String
  },
  permanentAddress: {
    type: String
  },
  guardian: {
    type: String,
    name: quardianSchema
  },
  localGuardian: {},
  profileImage: {
    type: String
  },
  academicSemester: {
    type: Schema.Types.ObjectId,
    ref: "AcademicSemester"
  },
  academicDepartment: {
    type: Schema.Types.ObjectId,
    ref: "AcademicDepartment"
  },
  isDeleted: {}
});
export const StudentModel = model<studentInterface, StudentInterface2>(
  "Student",
  studentSchema
);
