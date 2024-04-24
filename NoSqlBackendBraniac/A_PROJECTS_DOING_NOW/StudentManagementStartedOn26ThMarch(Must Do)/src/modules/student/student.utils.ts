import { Schema } from "mongoose";

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
/////////////----------

export const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    trim: true,
    maxlength: [20, "Name can not be more than 20 characters"]
  },
  middleName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Last Name is required"],
    maxlength: [20, "Name can not be more than 20 characters"]
  }
});

export const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, "Father Name is required"]
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, "Father occupation is required"]
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father Contact No is required"]
  },
  motherName: {
    type: String,
    required: [true, "Mother Name is required"]
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother occupation is required"]
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother Contact No is required"]
  }
});

export const localGuradianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  occupation: {
    type: String,
    required: [true, "Occupation is required"]
  },
  contactNo: {
    type: String,
    required: [true, "Contact number is required"]
  },
  address: {
    type: String,
    required: [true, "Address is required"]
  }
});
