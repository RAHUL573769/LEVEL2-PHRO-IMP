/*
  Warnings:

  - You are about to drop the column `userId` on the `admin` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "admin" DROP COLUMN "userId",
ALTER COLUMN "isDeleted" SET DEFAULT false;
