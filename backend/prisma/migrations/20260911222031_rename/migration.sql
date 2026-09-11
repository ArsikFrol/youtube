/*
  Warnings:

  - You are about to drop the column `profile_id` on the `channels` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[owner_id]` on the table `channels` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `owner_id` to the `channels` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "channels" DROP CONSTRAINT "channels_profile_id_fkey";

-- DropIndex
DROP INDEX "channels_profile_id_key";

-- AlterTable
ALTER TABLE "channels" DROP COLUMN "profile_id",
ADD COLUMN     "owner_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "channels_owner_id_key" ON "channels"("owner_id");

-- AddForeignKey
ALTER TABLE "channels" ADD CONSTRAINT "channels_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "profiles"("profileId") ON DELETE RESTRICT ON UPDATE CASCADE;
