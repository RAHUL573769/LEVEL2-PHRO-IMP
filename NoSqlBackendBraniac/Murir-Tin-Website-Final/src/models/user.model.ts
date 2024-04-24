import { Document, Query, Schema, model } from "mongoose";
import { IUser, IUserRole, IUserStatus } from "../interface/user.interface";

export const UserStatus: IUserStatus[] = ["active", "inactive"];
export const UserRole: IUserRole[] = ["admin", "user"];
const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Please Tell Us Uy Name"]
  },
  age: {
    type: Number,
    required: [true, "Please Tell Us Ur Age"]
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please Enter Email"]
  },
  photo: {
    type: String
  },
  role: {
    type: String,
    enum: {
      values: UserRole
    },
    default: "user"
  },
  userStatus: {
    type: String,
    enum: {
      values: UserStatus
    },
    default: "active"
  }
});
//Pre hook for Query Middle ware
userSchema.pre("find", function (this: Query<IUser, Document>, next) {
  this.find({ userStatus: { $eq: "active" } });

  next();
});
//Pre hook for Query Middle ware
export const User = model<IUser>("User", userSchema);
