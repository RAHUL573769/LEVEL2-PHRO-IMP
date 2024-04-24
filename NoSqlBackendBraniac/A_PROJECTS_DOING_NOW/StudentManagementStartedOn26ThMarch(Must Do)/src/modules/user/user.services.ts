import mongoose from "mongoose";
import { TAcademicSemester } from "../AdmissionSemester/admission.Semester.interface";
import { AcademicSemester } from "../AdmissionSemester/admission.Semester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { NewUser, TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

const createIntoDb = async (password: string, studentData: TStudent) => {
  //create a user object

  // const userData: NewUser = {
  //   role: "",
  //   password: "",
  //   id: ""
  // };

  const userData: Partial<TUser> = {};

  //if password not given Use default password
  if (!password) {
    password = "Default Password";
  } else {
    userData.password = password;
  }

  //set student role
  //year semesterCode 4 digit code

  //find academic semester info

  userData.role = "student";
  //manually genertated id
  // userData.id = "20r30353";

  //find academic semester data from student collection
  const admissionSemester = await AcademicSemester.findById(
    studentData.admissionSemester
  );
  //transaction and roll  back

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    userData.id = await generateStudentId(
      admissionSemester as TAcademicSemester
    );
    //transaction --1
    const newUser = await User.create([userData], { session }); // after using transaction it becomes  array
    if (!newUser.length) {
      throw new Error("Falied to create User");
    }

    studentData.id = newUser[0].id;
    studentData.user = newUser[0]._id;

    const newStudent = await Student.create([studentData], { session });
    if (!newStudent) {
      throw new Error("Falied to create Student");
    }
    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    console.log(error);
  }
  //end of transaction and roll  back

  //find academic semester data from student collection
};

export const UserService = {
  createIntoDb
};
