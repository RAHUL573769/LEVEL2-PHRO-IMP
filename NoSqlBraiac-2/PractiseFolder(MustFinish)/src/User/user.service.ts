import { TAcademicSemester } from "../AcademicSemester/academicSemester.interface.";
import { IStudent } from "../Student/student.interface";
import { Student } from "../Student/student.model";
import { IUser } from "./user.interface";
import { User } from "./user.model";

const createStudent = async (password: string, studentData: IStudent) => {
  // console.log(studentData);

  const userData: Partial<IUser> = {};
  userData.role = "student";
const generateStudentId=(payload:TAcademicSemester)=>{

}
  if (!password) {
    userData.password = "Default Password";
  } else {
    userData.password = password;
  }
  const newUser = await User.create(userData);
  //must be auto generated
  newUser.id = "1233";
  if (Object.keys(newUser).length) {
    studentData.user = newUser._id;

    studentData.id = newUser.id;

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
  // if (await User.isUserExists(userData.id)) {
  //   throw new Error("User Already Exists!!!Please Enter a New User");
  // } else {
  const result = await User.create(studentData);
  return result;
};
export const UserServices = { createStudent };
