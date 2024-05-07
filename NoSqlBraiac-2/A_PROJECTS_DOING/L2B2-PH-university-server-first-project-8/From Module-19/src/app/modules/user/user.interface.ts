/* eslint-disable no-unused-vars */
// export type TUser = {
//   id: string;
//   password: string;
//   needsPasswordChange: boolean;
//   role: 'admin' | 'student' | 'faculty';
//   status: 'in-progress' | 'blocked';
//   isDeleted: boolean;

import { Model } from 'mongoose';

// };
export interface TUser {
  id: string;
  password: string;
  passwordChangedAt?: Date;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
}
export interface UserModel extends Model<TUser> {
  // myStaticMethod(): number;
  isJwtIssuesBeforePasswordChange(
    passwordChangeTimeStamp: Date,
    jwtIssueTimeStamp: number,
  ): Promise<boolean>;
  isUserExistsByCustomId(id: string): Promise<TUser>;
  isPasswordMatch(plainTextPassword: string, hashPassword: string): boolean;
}
