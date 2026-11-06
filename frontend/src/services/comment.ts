import { ApiRoutes } from "./constants"
import { axiosInstance } from "./instance"

export const postComment = async (videoId: string, profileId: string, text: string) => {
    try {
        const { data } = await axiosInstance.post(
            `videos/${videoId}/${ApiRoutes.COMMENT}?profileId=${profileId}`,
            { text }
        )
        return data
    } catch (error: any) {
        console.log('STATUS:', error?.response?.status)
        console.log('DATA:', error?.response?.data)
        console.log('URL:', error?.config?.url)
        console.log('BODY:', error?.config?.data)
        throw error
    }
}