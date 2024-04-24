import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "This is Title By Me",
        author: "AuhorName New",
        content: "This is Content New"
      },

      {
        title: "This is Title By Me-1",
        author: "AuhorName New-1",
        content: "This is Content New-1"
      }
    ]
  });
};
main();
