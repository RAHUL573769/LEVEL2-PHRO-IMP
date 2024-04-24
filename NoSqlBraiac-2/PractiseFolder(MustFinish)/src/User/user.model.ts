import { Schema, model } from "mongoose";
import { IUser, UserStaticMethods } from "./user.interface";
import { IUserRole, IUserStatus, UserRole, UserStatus } from "./userConstants";

const userSchema = new Schema<IUser, UserStaticMethods>(
  {
    id: {
      type: String,
      required: false,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    needsPasswordChange: {
      type: Boolean,
      default: true
    },
    role: {
      type: String,
      enum: UserRole
    },
    status: {
      type: String,
      enum: UserStatus,
      default: "in-progress"
    },
    createdAt: {
      type: Date
    },
    updatedAt: {
      type: Date
    }
  },
  { timestamps: true }
);
userSchema.statics.UserStaticMethods = async function (id: string) {
  const isUserExists = await User.findOne({ id });
  return isUserExists;
};

export const User = model<IUser, UserStaticMethods>("User", userSchema);
