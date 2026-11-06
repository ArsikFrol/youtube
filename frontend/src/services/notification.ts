import { ApiRoutes } from "./constants"
import { axiosInstance } from "./instance"

export type TNotification = 'ALL' | 'PERSONALIZED' | 'NONE'

type TResponse = {
    subscriptionId: string
    notification: TNotification
}

export const updateNotification = async (subscriptionId: string, notification: TNotification): Promise<TResponse> => {
    const { data } = await axiosInstance.patch(`${ApiRoutes.SUBSCRIPTION}/${subscriptionId}`, { notification })

    return data
}