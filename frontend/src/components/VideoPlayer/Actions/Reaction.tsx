'use client'

import { ThumbsDown, ThumbsUp } from "lucide-react"
import React, { useState } from "react"

import { formatViews } from "@/lib/formatDate"
import { TGetVideo } from "@/types"
import { cn } from "@/lib/utils"
import { usePatchReaction } from "@/hooks/usePatchReaction"
import useProfile from "@/store/profile/profile"

type Props = {
    objVideo: TGetVideo
}

type TReaction = 'LIKE' | 'DISLIKE' | null

export default function Reaction(props: Props) {

    const [reaction, setReaction] = useState<TReaction>(props.objVideo.reaction)

    const { profileId } = useProfile()

    const {
        likes,
        disLikes,
        toggleReaction
    } = usePatchReaction(props.objVideo.videoId, profileId, props.objVideo.likes, props.objVideo.disLikes)

    const clickLike = () => {
        setReaction('LIKE')

        toggleReaction('LIKE')
    }

    const clickDisLike = () => {
        setReaction('DISLIKE')

        toggleReaction('DISLIKE')
    }

    return (
        <div className='flex items-center bg-gray-100 rounded-2xl'>
            <div className={cn(
                'group flex items-center gap-x-[5px] rounded-2xl py-[7px] px-[25px]',
                'hover:bg-gray-200 transition-colors duration-300 cursor-pointer'
            )} onClick={clickLike}>
                {
                    React.cloneElement(<ThumbsUp size={30} strokeWidth={1.5}
                        className="group-hover:scale-101 transition-all duration-300 cursor-pointer" />, {
                        fill: reaction === 'LIKE' ? 'black' : 'white'
                    })
                }
                <div className='text-[16px] font-medium'>{formatViews(likes)}</div>
            </div>
            <div className='w-[1px] h-[18px] bg-gray-200'></div>
            <div className={cn(
                'group flex items-center gap-x-[5px] rounded-2xl py-[7px] px-[25px]',
                'hover:bg-gray-200 transition-colors duration-300 cursor-pointer'
            )} onClick={clickDisLike}>
                {
                    React.cloneElement(<ThumbsDown size={30} strokeWidth={1.5}
                        className="group-hover:scale-101 transition-all duration-300 cursor-pointer" />, {
                        fill: reaction === 'DISLIKE' ? 'black' : 'white'
                    })
                }
                <div className='text-[16px] font-medium'>{formatViews(disLikes)}</div>
            </div>
        </div>
    )
}