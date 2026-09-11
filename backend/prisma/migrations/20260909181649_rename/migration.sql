/*
  Warnings:

  - You are about to drop the column `dislikes` on the `videos` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `videos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "videos" DROP COLUMN "dislikes",
DROP COLUMN "likes";

-- CreateTable
CREATE TABLE "likes" (
    "like_id" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "video_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("like_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "likes_profile_id_video_id_key" ON "likes"("profile_id", "video_id");

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("profileId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_video_id_fkey" FOREIGN KEY ("video_id") REFERENCES "videos"("videoId") ON DELETE RESTRICT ON UPDATE CASCADE;
