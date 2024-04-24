export type IUserRole = "admin" | "student" | "faculty";
export type IUserStatus = "in-progress" | "blocked";
export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: IUserRole;
  status: IUserStatus;
  isDeleted: boolean;
};
