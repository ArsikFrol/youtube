/*
  Warnings:

  - You are about to drop the column `first_name` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `profiles` table. All the data in the column will be lost.
  - Added the required column `profile_name` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "first_name",
DROP COLUMN "last_name",
ADD COLUMN     "profile_name" TEXT NOT NULL;
