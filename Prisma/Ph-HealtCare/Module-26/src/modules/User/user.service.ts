import { PrismaClient, UsersRole } from "@prisma/client";
import bcrypt from "bcrypt";

const createAdmin = async (data: any) => {
  const prisma = new PrismaClient();

  const hashedPassword: string = await bcrypt.hash(data.password, 12);
  console.log("Hashed Password", hashedPassword);
  const userData = {
    email: data.admin.email,
    password: hashedPassword,
    role: UsersRole.ADMIN
  };
  const adminData = {
    name: data.admin.name
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    const createdUserData = await transactionClient.user.create({
      data: userData
    });
    const createDAdminData = await transactionClient.admin.create({
      data: data.admin
    });
    return createDAdminData;
  });
  return result;
};



export const UserService = {
  createAdmin
};
