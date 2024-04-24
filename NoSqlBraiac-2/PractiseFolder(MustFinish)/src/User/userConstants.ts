export type IUserRole = "admin" | "student" | "faculty";

export type IUserStatus = "in-progress" | "blocked";
export const UserRole: IUserRole[] = ["admin", "faculty", "student"];
export const UserStatus: IUserStatus[] = ["blocked", "in-progress"];
