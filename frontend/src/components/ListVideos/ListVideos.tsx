'use client'

import { useCallback } from "react"

import Elem from "./Elem"
import { useTypedRouter } from "@/hooks/useTypedRouter"
import { ClipLoaderUI } from "../UI/ClipLoader"
import { useGetVideos } from "@/hooks/useVideos"

export default function ListVideos() {
    const router = useTypedRouter()

    const { error, listVideos, loading } = useGetVideos()

    const clickVideo = useCallback((videoId: string) => {
        router.push(`/videos/${videoId}`)
    }, [])

    if (loading) return <ClipLoaderUI />
    if (!listVideos) return;

    return (
        <div className="grid grid-cols-3 gap-x-[5px] gap-y-[20px] h-[calc(100vh-65px)] overflow-y-auto">
            {
                listVideos.map((obj, index) => {
                    return (
                        <Elem key={index} obj={obj} clickVideo={clickVideo} />
                    )
                })
            }
        </div>
    )
}