import { TNotification, updateNotification } from "@/services/notification"
import { useCallback, useEffect, useState } from "react"

type TReturn = {
    subscriptionId: string | null,
    notification: TNotification | null,
    changeNotification: (value: TNotification) => Promise<void>
}

export function useUpdateNotification(
    subscriptionId: string | null,
    initialNotification: TNotification | null
): TReturn {

    const [notification, setNotification] = useState<TNotification | null>(
        initialNotification ?? null
    )

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        setNotification(initialNotification ?? null)
    }, [subscriptionId, initialNotification])

    const changeNotification = useCallback(async (value: TNotification) => {
        if (loading || value === notification) return
        if (!subscriptionId) return

        setLoading(true)
        setError(null)

        try {
            const data = await updateNotification(subscriptionId, value)

            setNotification(data.notification)
        } catch (err) {
            setError(err as Error)
            console.error('Ошибка при обновлении реакции:', err)
        } finally {
            setLoading(false)
        }
    }, [subscriptionId, notification, loading])

    return { subscriptionId, notification, changeNotification }
}