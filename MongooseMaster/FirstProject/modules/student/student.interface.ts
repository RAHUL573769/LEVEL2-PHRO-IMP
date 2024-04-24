// import { Schema } from "mongoose";

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContact: string;
  motherName: string;
  motherOccupation: string;
  motherContact: string;
};
export type Name = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type Student = {
  name: Name;
  gender: string;
  dateofBirth: string;
  contactNumber: string;
  emergencycontact: string;
  guardian: Guardian;
};
