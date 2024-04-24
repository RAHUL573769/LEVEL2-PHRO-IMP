import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const deleteData = await prisma.post.delete({
    where: {
      id: 1
    }
  });
};
main();
