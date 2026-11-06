import { VideoModel } from "../../../backend/src/generated/prisma/models"
import { TGetComment } from "./comment"

export type TNotification = 'ALL' | 'PERSONALIZED' | 'NONE'

export type Video = {
    videoId: string;
    creatorId: string;

    preview: string;
    title: string;
    description: string;
    views: number;

    createdAt: Date;
}

export type TGetVideo = Video & {
    creator: {
        channelId: string,
        channelName: string,
        subscribers: number
    },
    comments: TGetComment[],

    likes: number,
    disLikes: number,
    reaction: 'LIKE' | 'DISLIKE' | null,

    subscription: {
        isSubscribed: boolean,
        notification: TNotification,
        subscriptionId: string
    }
} 