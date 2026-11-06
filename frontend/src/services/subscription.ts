
import { ApiRoutes } from "./constants"
import { axiosInstance } from "./instance"
import { TNotification } from "./notification"

type ReturnToggleSub = {
    isSubscribed: boolean
    subscribers: number

    subscriptionId: string,
    notification: TNotification
}

export const toggleSubscription = async (channelId: string, profileId: string): Promise<ReturnToggleSub> => {
    const { data } = await axiosInstance.patch(`${ApiRoutes.CHANNEL}/${channelId}/subscription?profileId=${profileId}`)

    return data
}