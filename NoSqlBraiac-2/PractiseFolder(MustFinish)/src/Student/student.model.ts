import { Schema, model } from "mongoose";
import { IStudent } from "./student.interface";
import {
  StudentBloodGroup,
  StudentGender,
  USER_GENDER,
  guardianName,
  localGuardianName,
  studentBloodGroup,
  studentGender,
  studentGuardian,
  studentLocalGuardian,
  studentName,
  studentNameSchema
} from "./student.constants";

const studentSchema = new Schema<IStudent>({
  id: {
    type: String,
    unique: true,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    unique: true
  },
  name: {
    firstName: {
      type: String,
      required: [true, "Student First Name is Required"]
    },
    middleName: {
      type: String
    },
    lastName: {
      type: String,
      required: [true, "Student Last Name is Required"]
    }
  },
  password: {
    type: String
  },
  gender: {
    type: String,
    enum: {
      values: Object.values(USER_GENDER)
    }
  },
  dateOfBirth: {
    type: Date
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please Give Email"]
  },
  contactNumber: {
    type: Number
  },
  emergencyContactNumber: {
    type: Number,
    required: [true, "Please Give Emergency Contact Number"]
  },
  presentAddress: {
    type: String
  },
  permanentAddress: {
    type: String,
    required: [true, "Please Give Permanent Address"]
  },
  bloodGroup: {
    type: String,
    values: StudentBloodGroup
  },
  guardianName: {
    firstName: {
      type: String,
      required: [true, "Student's Guardian  First Name is Required"]
    },
    middleName: {
      type: String
    },
    lastName: {
      type: String,
      required: [true, "Student's  Guardian Last Name is Required"]
    }
  },
  localGuardianName: {
    firstName: {
      type: String,
      required: [true, "Student's Local  First Name is Required"]
    },
    middleName: {
      type: String
    },
    lastName: {
      type: String,
      required: [true, "Student's Local Last Name is Required"]
    }
  },

  profileImage: {
    type: String
  },
  academicDepartment: {
    type: Schema.Types.ObjectId
  },
  academicSemester: {
    type: Schema.Types.ObjectId,
    ref: "AcademicSemester"
  }
});

export const Student = model<IStudent>("Student", studentSchema);
