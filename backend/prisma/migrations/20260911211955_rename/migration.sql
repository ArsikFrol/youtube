-- CreateEnum
CREATE TYPE "Notifications" AS ENUM ('ALL', 'PERSONALIZED', 'NONE');

-- CreateTable
CREATE TABLE "subscriptions" (
    "subscription_id" TEXT NOT NULL,
    "notifications" "Notifications" NOT NULL DEFAULT 'ALL',
    "profile_id" TEXT NOT NULL,
    "channel_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("subscription_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subscriptions_profile_id_channel_id_key" ON "subscriptions"("profile_id", "channel_id");

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "profiles"("profileId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_channel_id_fkey" FOREIGN KEY ("channel_id") REFERENCES "channels"("channel_id") ON DELETE CASCADE ON UPDATE CASCADE;
