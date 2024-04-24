export type IUserStatus = "active" | "inactive";
export type IUserRole = "user" | "admin";
export interface IUser {
  name: string;
  age: number;
  email: string;
  photo: string;

  role: IUserRole;
  userStatus: IUserStatus;
}
