export type UserRole = "admin" | "student" | "faculty";
export type UserStatus = "in-progress" | "blocked";
export type IUser = {
  id: number;
  password: string;
  needsPasswordChange: boolean;
  role: UserRole;
  status: UserStatus;
  isDeleted: boolean;
};
export type NewUser = {
  password: string;
  role: string;
  id: string;
};
