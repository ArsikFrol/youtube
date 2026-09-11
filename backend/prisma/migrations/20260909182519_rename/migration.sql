/*
  Warnings:

  - You are about to drop the `likes` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ReactionType" AS ENUM ('LIKE', 'DISLIKE');

-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "likes" DROP CONSTRAINT "likes_video_id_fkey";

-- DropTable
DROP TABLE "likes";

-- CreateTable
CREATE TABLE "reactions" (
    "reaction_id" TEXT NOT NULL,
    "reactionType" "ReactionType" NOT NULL,
    "profile_id" TEXT NOT NULL,
    "video_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reactions_pkey" PRIMARY KEY ("reaction_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "reactions_profile_id_video_id_key" ON "reactions"("profile_id", "video_id");

-- AddForeignKey
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("profileId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_video_id_fkey" FOREIGN KEY ("video_id") REFERENCES "videos"("videoId") ON DELETE RESTRICT ON UPDATE CASCADE;
