/*
  Warnings:

  - You are about to drop the column `dislikes` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `subscribers` on the `profiles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "videos" DROP CONSTRAINT "videos_creator_id_fkey";

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "dislikes",
DROP COLUMN "likes";

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "subscribers";

-- AlterTable
ALTER TABLE "reactions" ADD COLUMN     "comment_id" TEXT;

-- CreateTable
CREATE TABLE "channels" (
    "channel_id" TEXT NOT NULL,
    "channel_name" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "subscribers" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "channels_pkey" PRIMARY KEY ("channel_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "channels_profile_id_key" ON "channels"("profile_id");

-- AddForeignKey
ALTER TABLE "channels" ADD CONSTRAINT "channels_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("profileId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_comment_id_fkey" FOREIGN KEY ("comment_id") REFERENCES "comments"("comment_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "videos" ADD CONSTRAINT "videos_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "channels"("channel_id") ON DELETE RESTRICT ON UPDATE CASCADE;
