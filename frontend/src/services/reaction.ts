import { ApiRoutes } from "./constants"
import { axiosInstance } from "./instance"

type TReturn = {
    success: true,
    action: 'created' | 'updated' | 'removed',
    likes: number,
    disLikes: number,
    userReaction: 'LIKE' | 'DISLIKE' | null
}

type TBody = {
    profileId: string,
    reactionType: 'LIKE' | 'DISLIKE' | null
}

export const patchReaction = async (videoId: string, body: TBody): Promise<TReturn> => {
    const { data } = await axiosInstance.patch(`${ApiRoutes.VIDEOS}/${videoId}/${ApiRoutes.REACTION}`, body)

    return data
}