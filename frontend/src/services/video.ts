
import { TGetVideo } from "@/types/video"
import { ApiRoutes } from "./constants"
import { axiosInstance } from './instance'

export const getVideo = async (videoId: string, profileId: string): Promise<TGetVideo> => {
    const { data } = await axiosInstance.get<TGetVideo>(`${ApiRoutes.VIDEOS}/${videoId}`,
        { params: { profileId } }
    )

    return data
}

export const getVideos = async (search?: string): Promise<TGetVideo[]> => {

    const params = new URLSearchParams()

    if (search && search.trim().length > 0) params.set('search', search)

    const qs = params.toString()
    const url = qs ? `${ApiRoutes.VIDEOS}?${qs}` : `${ApiRoutes.VIDEOS}`

    const { data } = await axiosInstance.get<TGetVideo[]>(url)

    return data
}