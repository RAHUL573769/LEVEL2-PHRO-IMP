import { Schema, model } from "mongoose";
import { IUser, UserRole, UserStatus } from "./user.interface";

const Role: UserRole[] = ["admin", "faculty", "student"];
const Status: UserStatus[] = ["blocked", "in-progress"];
const userSchema = new Schema<IUser>({
  id: {
    type: Number,
    required: true
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
    enum: Role
  },
  status: {
    type: String,
    enum: Status,
    default: "in-progress"
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

export const User = model<IUser>("User", userSchema);
