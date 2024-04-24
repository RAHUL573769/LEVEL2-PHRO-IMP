import { Schema, model } from "mongoose";
import { IUser, userRole, userStatus } from "../interface/user.interface";

const USER_ROLE: userRole[] = ["admin", "user"];
const USER_STATUS: userStatus[] = ["active", "inactive"];
const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Please Tell Your Name"]
  },
  age: {
    type: Number,
    required: [true, "Please Tell Your Age"]
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Please ENTER your Email"]
  },
  photo: String,

  role: {
    type: String,
    enum: USER_ROLE,
    default: "user"
  },
  userStatus: {
    type: String,
    enum: USER_STATUS,
    default: "active"
  }
});

//
userSchema.pre("find", function (this, next) {
  this.find({ userStatus: { $eq: "active" } });
  next();
});

const User = model<IUser>("user", userSchema);
export default User;
