import { Types } from "mongoose";

export type studentName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type guardianName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type localGuardianName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type studentGender = "male" | "female" | "others";
export type studentBloodGroup =
  | "A+"
  | "A-"
  | "B+"
  | "B-"
  | "AB+"
  | "AB-"
  | "O+"
  | "O-";

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: studentName;
  gender: studentGender;
  dateOfBirth: string;
  contactNumber: string;
  email: string;
  emergencyContactNumber: string;
  bloodGroup?: studentBloodGroup;
  presentAddress: string;
  permanentAddress: string;
  guardian: guardianName;
  localGuardian: localGuardianName;
  profileImage: string;
  admissionSemester: Types.ObjectId;
  isDeleted: string;
};
