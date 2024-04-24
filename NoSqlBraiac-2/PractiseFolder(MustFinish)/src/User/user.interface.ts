import { Model } from "mongoose";
import { IUserRole, IUserStatus } from "./userConstants";

export type IUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: IUserRole;
  status: IUserStatus;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export interface UserStaticMethods extends Model<IUser> {
  isUserExists(id: string): Promise<IUser>;
}
