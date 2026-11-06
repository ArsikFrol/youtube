import { toggleSubscription } from "@/services/subscription";
import { useCallback, useState } from "react";

type TReturn = {
    subscribers: number
    isSubscribed: boolean,
    newSubscriptionId: string

    loading: boolean
    error: Error | null

    toggle: () => Promise<void>
}

export function useToggleSubscription(
    channelId: string,
    profileId: string,

    initialSubscribers: number,
    initialIsSubscribed: boolean,
): TReturn {
    const [subscribers, setSubscribers] = useState<number>(initialSubscribers)
    const [isSubscribed, setIsSubscribed] = useState(initialIsSubscribed)
    const [newSubscriptionId, setNewSubscriptionId] = useState<string>('')

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const toggle = useCallback(async () => {
        if (loading) return

        setLoading(true)
        setError(null)

        try {
            const data = await toggleSubscription(channelId, profileId)

            setSubscribers(data.subscribers)
            setIsSubscribed(data.isSubscribed)
            setNewSubscriptionId(data.subscriptionId)
        } catch (err) {
            console.error('Ошибка подписки:', err)
        } finally {
            setLoading(false)
        }
    }, [channelId, profileId])

    return {
        subscribers,
        isSubscribed,
        newSubscriptionId,

        loading,
        error,

        toggle
    }
}