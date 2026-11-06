/*
  Warnings:

  - A unique constraint covering the columns `[user_name]` on the table `profiles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_name` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "profiles" ADD COLUMN     "user_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "profiles_user_name_key" ON "profiles"("user_name");
