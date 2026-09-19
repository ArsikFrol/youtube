/*
  Warnings:

  - You are about to drop the column `notifications` on the `subscriptions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "subscriptions" DROP COLUMN "notifications",
ADD COLUMN     "notification" "Notifications" NOT NULL DEFAULT 'ALL';
