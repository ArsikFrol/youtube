'use client'

import { useCallback } from "react"

import Elem from "./Elem"
import { TypeRoutes, useTypedRouter } from "@/hooks/useTypedRouter"
import { useGetVideos } from "@/hooks/useVideos"
import { Loading } from "./Loading"

export default function SimilarVideos() {
    const router = useTypedRouter()

    const { error, listVideos, loading } = useGetVideos()

    const clickVideo = useCallback((link: TypeRoutes) => {
        router.push(link)
    }, [])

    if (loading) return <Loading />
    if (!listVideos) return;

    return (
        <div className="w-[570px] pb-[10px] flex flex-col h-[calc(100vh-65px)] overflow-y-auto">
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