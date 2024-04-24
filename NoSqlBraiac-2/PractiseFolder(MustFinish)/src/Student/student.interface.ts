import mongoose from "mongoose";
import {
  studentBloodGroup,
  studentGender,
  studentGuardian,
  studentLocalGuardian,
  studentName
} from "./student.constants";

export interface IStudent {
  id: string;
  user: mongoose.Types.ObjectId;
  name: studentName;
  password: string;
  gender: studentGender;
  dateOfBirth: Date;
  email: string;
  contactNumber: number;
  emergencyContactNumber: number;
  bloodGroup: studentBloodGroup;
  presentAddress: string;
  permanentAddress: string;
  guardianName: studentGuardian;
  localGuardianName: studentLocalGuardian;
  profileImage: string;
  academicSemester: mongoose.Types.ObjectId;
  academicDepartment: mongoose.Types.ObjectId;
  isDeleted: boolean;
}
