import { IStudent, TUser } from "../student/student.interface";
import { IUser, NewUser } from "./user.interface";
import { User } from "./user.model";

const createIntoDb = async (password: string, studentData: IStudent) => {
  //   const userData: Partial<IUser> = {};

  //   userData.password = password;
  //   userData.role = "student";
  //   userData.id = 324256;

  //   console.log(userData);
  //if password not siven use default password
  const user: Partial<IUser> = {};

  if (!password) {
    user.password = "Default Password";
  } else {
    user.password = password;
  }

  user.role = "student";
  //manually generated id
  user.id = "20301022";
  //create a user model
  const result = await User.create(userData);
  // create a sudent
  if (Object.keys(result).length) {
    //set id ,_id as user
    studentData.id = result.id;
    studentData.user = result._id;
  }

  return result;
};
export const userServices = { createIntoDb };
