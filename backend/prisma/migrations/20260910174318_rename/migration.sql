/*
  Warnings:

  - You are about to drop the column `comment_id` on the `reactions` table. All the data in the column will be lost.
  - Added the required column `logo` to the `channels` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "reactions" DROP CONSTRAINT "reactions_comment_id_fkey";

-- AlterTable
ALTER TABLE "channels" ADD COLUMN     "logo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "reactions" DROP COLUMN "comment_id";
