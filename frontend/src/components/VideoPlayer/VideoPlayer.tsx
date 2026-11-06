'use client'

import { usePathname } from "next/navigation"

import { formatTimeAgo, formatViews } from "@/lib/formatDate"
import useProfile from "@/store/profile/profile"
import Comments from "./Comments/Comments"
import { useGetVideo } from "@/hooks/useVideos"
import Actions from "./Actions/Actions"
import { Loading } from "./Loading"

export default function VideoPlayer() {
    const pathName = usePathname()
    const videoId = pathName.split('/')[2]

    const { profileId } = useProfile()

    const { error, loading, objVideo } = useGetVideo(videoId, profileId)

    if (loading) return <Loading />;
    if (!objVideo) return;

    return (
        <div className='flex-1 h-[calc(100vh-65px)] overflow-y-auto'>
            <div className="flex-1 h-[720px] bg-gray-400 rounded-2xl mt-[10px]"></div>
            <div className='font-medium text-[20px] my-[10px]'>{objVideo.title}</div>
            <Actions objVideo={objVideo} />
            <div className='bg-gray-100 rounded-2xl p-[20px]'>
                <div className='flex items-center gap-x-[10px] font-medium'>
                    <div className=''>{formatViews(objVideo.views)} views</div>
                    <div className=''>{formatTimeAgo(objVideo.createdAt)}</div>
                </div>
                <div className='text-[14px] font-light'>{objVideo.description}</div>
            </div>
            <Comments objVideo={objVideo} />
        </div>
    )
}