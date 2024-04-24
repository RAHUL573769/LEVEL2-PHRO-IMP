import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   console.log(result);

  const getAllDataFromDb = await prisma.post.findMany();

  const findFast = await prisma.post.findFirst({
    where: {
      id: 2
    }
  });

  const findFastThrow = await prisma.post.findFirstOrThrow({
    where: {
      id: 20
    }
  });

  const findFastUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 1
    }
  });
  //   console.log(getAllDataFromDb);

  //   console.log(findFast);
  console.log(findFastUnique);

  //   console.log(findFastThrow);
};

main();
