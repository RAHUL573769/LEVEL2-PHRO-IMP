import { IUser } from "../interface/user.interface";
import User from "../models/user.model";

const createUser = async (data: IUser): Promise<IUser> => {
  const result = await User.create(data);
  return result;
};
const getAllUser = async (): Promise<IUser[]> => {
  const result = await User.find();
  return result;
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findById(id);
  return result;
};

const updateUser = async (id: string, data: IUser): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
  return result;
};
const deleteUser = () => {};
export const userServices = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser
};
