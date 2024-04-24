export type userRole = "user" | "admin";
export type userStatus = "active" | "inactive";

interface IUser {
  name: string;
  email: string;
  age: number;
  photo: string;
  role: userRole;
  userStatus: userStatus;
}
export { IUser };
