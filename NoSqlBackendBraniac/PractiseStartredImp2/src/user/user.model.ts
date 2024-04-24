import { Schema, model } from "mongoose";
import { IUserRole, IUserStatus, TUser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../config";

export const UserRole: IUserRole[] = ["admin", "faculty", "student"];

export const UserStatus: IUserStatus[] = ["blocked", "in-progress"];
const userSchema = new Schema<TUser>(
  {
    id: {
      type: String
    },
    password: {
      type: String
    },
    needsPasswordChange: {
      type: Boolean
    },
    role: {
      type: String,
      enum: {
        values: UserRole
      }
    },
    status: {
      type: String,
      enum: {
        values: UserStatus
      },
      default: "in-progress"
    },
    isDeleted: {
      type: Boolean
    }
  },
  {
    timestamps: true
  }
);

// userSchema.pre("save", async function (next) {
//   const user = this;
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds)
//   );

//   next();
// });

userSchema.post("save", async function (doc, next) {
  doc.password = "";
  next();
});
export const User = model<TUser>("User", userSchema);
