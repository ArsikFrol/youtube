import { useCallback, useEffect, useState } from "react"

import { patchReaction } from "@/services/reaction"

type TReturn = {
    likes: number,
    disLikes: number,
    toggleReaction: (type: 'LIKE' | 'DISLIKE') => Promise<void>
}

export function usePatchReaction(
    videoId: string,
    profileId: string,
    initialLikes: number,
    initialDisLikes: number,
): TReturn {

    const [likes, setLikes] = useState<number>(initialLikes)
    const [disLikes, setDisLikes] = useState<number>(initialDisLikes)

    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    const toggleReaction = useCallback(async (type: 'LIKE' | 'DISLIKE') => {

        try {
            const data = await patchReaction(videoId, {
                profileId,
                reactionType: type,
            })

            setLikes(data.likes)
            setDisLikes(data.disLikes)

        } catch (err) {
            setError(err as Error)
            console.error('Ошибка при обновлении реакции:', err)
        } finally {
            setLoading(false)
        }
    }, [videoId, profileId])

    return {
        likes,
        disLikes,
        toggleReaction
    }
}