// import { Types } from "mongoose";

import { Model, Types } from "mongoose";

// export type TUserName = {
//   firstName: string;
//   middleName: string;
//   lastName: string;
// };

// export type TGuardian = {
//   fatherName: string;
//   fatherOccupation: string;
//   fatherContactNumber: string;
//   motherName: string;
//   matherOccupation: string;
// };
// export type TLOcalGuardian = {
//   name: string;
//   occupation: string;
//   contactNumber: string;
//   address: string;
// };

// export type TStudent = {
//   id: string;
//   user: Types.ObjectId;
//   password: string;
//   name: TUserName;
//   gender: "male" | "female" | "other";
//   dateOfBirth: string;
//   email: string;
//   contactNumber: string;
//   emergencyContactNumber: string;
//   bloodGroup?: "A+" | "A-";
//   presentAddress: string;
//   permanaentAddress: string;
//   guardian: TGuardian;
//   localGuardian: TLOcalGuardian;
//   profileIage?: string;
//   isDeleted: string;
// };

export type studentName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type guardian = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type localGuardian = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type studentInterface = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: studentName;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  emergencyContactNumber: string;
  bloodGroup?: "A+";
  presentAddress: string;
  permanentAddress: string;
  guardian: guardian;
  localGuardian: localGuardian;
  profileImage?: string;
  academicSemester: Types.ObjectId;
  academicDepartment: Types.ObjectId;
  isDeleted: boolean;
};
export interface StudentInterface2 extends Model<studentInterface> {
  isUserExists(id: string): Promise<studentInterface | null>;
}
