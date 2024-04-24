import { Schema, model } from "mongoose";
import {
  TStudent,
  studentBloodGroup,
  studentGender,
  studentName
} from "./student.interface";

const userNameSchema = new Schema<studentName>({
  firstName: {
    type: String
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String
  }
});
const guardianNameSchema = new Schema<studentName>({
  firstName: {
    type: String
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String
  }
});
const localGuardianNameSchema = new Schema<studentName>({
  firstName: {
    type: String
  },
  middleName: {
    type: String
  },
  lastName: {
    type: String
  }
});
export const StudentBloodGroup: studentBloodGroup[] = [
  "A+",
  "A-",
  "AB+",
  "AB-",
  "B+",
  "B-",
  "O+",
  "O-"
];
export const StudentGender: studentGender[] = ["female", "male", "others"];
const studentSchema = new Schema<TStudent>({
  id: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId
  },
  password: {
    type: String
  },
  name: {
    type: String,
    value: userNameSchema
  },
  gender: {
    type: String,
    enum: StudentGender
  },
  dateOfBirth: {
    type: String
  },
  contactNumber: {
    type: String
  },
  email: {
    type: String
  },
  emergencyContactNumber: {
    type: String
  },
  bloodGroup: {
    type: String,
    enum: {
      values: StudentBloodGroup
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
    value: guardianNameSchema
  },
  localGuardian: {
    type: String,
    value: localGuardianNameSchema
  },
  profileImage: {
    type: String
  },
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref: "AcademicSemester"
  }
});

export const Student = model<TStudent>("Student", studentSchema);
