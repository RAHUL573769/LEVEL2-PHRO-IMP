import { Types } from "mongoose";

export type studentGender = "male" | "female";

export type studentBloodGroup = "A+" | "A-";
export type TUser = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type IStudent = {
  id: number;
  user: Types.ObjectId;

  name: TUser;
  gender: studentGender;
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  bloodGroup: studentBloodGroup;

  emergencyContactNumber: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage?: string;
  isDeleted: boolean;
};
