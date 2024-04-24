import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const updates = async () => {
  //   const singleUpdates = await prisma.post.update({
  //     where: {
  //       id: 6
  //     },
  //     data: {
  //       title: "New Title Updated",
  //       content: "Upated Content",
  //       author: "Updated Author"
  //     }
  //   });

  const updateMany = await prisma.post.updateMany({
    where: {
      author: "AuhorName"
    },
    data: {
      title: "New Titles"
    }
  });
};

updates();
