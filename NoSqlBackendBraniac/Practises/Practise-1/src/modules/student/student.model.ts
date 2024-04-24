import { Schema, model } from "mongoose";
import {
  IStudent,
  TGuardian,
  TLocalGuardian,
  TUser,
  studentGender
} from "./student.interface";
const Gender: studentGender[] = ["male", "female"];

const userNameSchema = new Schema<TUser>({
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

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String
  },
  fatherOccupation: {
    type: String
  },
  fatherContactNumber: {
    type: String
  },
  motherName: {
    type: String
  },
  motherOccupation: {
    type: String
  },
  motherContactNumber: {
    type: String
  }
});
const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String
  },
  occupation: {
    type: String
  },
  contactNo: {
    type: String
  },
  address: {
    type: String
  }
});

const studentSchema = new Schema<IStudent>({
  id: {
    type: Number
  },
  user: {
    type: Schema.Types.ObjectId
  },
  name: {
    type: userNameSchema
  },
  gender: {
    type: String,
    enum: {
      values: Gender
    }
  },
  bloodGroup: {
    type: String
  },
  emergencyContactNumber: {
    type: String
  },
  presentAddress: {
    type: String
  },
  permanentAddress: {
    type: String
  },
  guardian: {
    type: String
  },
  localGuardian: {
    type: String
  },
  profileImage: {
    type: String
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

export const Student = model<IStudent>("Student", studentSchema);
