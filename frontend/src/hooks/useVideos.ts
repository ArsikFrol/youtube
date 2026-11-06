import { useEffect, useState } from 'react'

import { Api } from '@/services/api-client'
import { TGetVideo } from '@/types/video'

type TReturnList = {
    listVideos: TGetVideo[] | null
    loading: boolean
    error: Error | null
}

type TReturnOne = {
    objVideo: TGetVideo | null
    loading: boolean
    error: Error | null
}

export function useGetVideos(search?: string): TReturnList {
    const [listVideos, setListVideos] = useState<TGetVideo[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        async function getVideos() {

            setLoading(true)
            setError(null)

            try {
                const objs = await Api.video.getVideos(search)
                setListVideos(objs)
            } catch (error) {
                setError(error as Error)
            } finally {
                setLoading(false)
            }
        }

        getVideos()
    }, [search])

    return { listVideos, loading, error }
}

export function useGetVideo(videoId: string, profileId: string): TReturnOne {
    const [objVideo, setObjVideo] = useState<TGetVideo | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        if (!videoId?.trim()) {
            setLoading(false)
            return
        }

        if (!profileId?.trim()) {
            setLoading(false)
            return
        }

        async function getVideo() {

            setLoading(true)
            setError(null)

            try {
                const obj = await Api.video.getVideo(videoId, profileId)
                setObjVideo(obj)
            } catch (error) {
                setError(error as Error)
            } finally {
                setLoading(false)
            }
        }

        getVideo()
    }, [videoId, profileId])

    return { objVideo, loading, error }
}