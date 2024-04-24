import { PrismaClient, UserRole } from "@prisma/client";

const createAdmin = async (data: any) => {
  const prisma = new PrismaClient();
  console.log(data);
  const userData = {
    email: data.admin.email,
    password: data.password,
    role: UserRole.ADMIN
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    const createUser = await transactionClient.user.create({
      data: userData
    });
    const createAdmin = await transactionClient.admin.create({
      data: data.admin
    });
    return createAdmin;
  });
  // const result = await prisma.$transaction(async (trClient) => {
  //   await trClient.user.create({
  //   data: userData
  //   });
  //   return await trClient.admin.create({
  //     data: data.admin
  //   });
  // });
  return result;
};

export const UserServices = { createAdmin };
