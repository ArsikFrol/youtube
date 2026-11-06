'use client'

import { cn } from "@/lib/utils"
import { postComment } from "@/services/comment"
import useProfile from "@/store/profile/profile"
import { TGetVideo } from "@/types"
import { useState } from "react"

type Props = {
    objVideo: TGetVideo
}

export default function Input(props: Props) {
    const [value, setValue] = useState<string>('')

    const { profileId } = useProfile()

    const clickPublished = async () => {
        const comment = await postComment(props.objVideo.videoId, profileId, value)
        setValue('')

        console.log(comment)
    }

    const clickCancel = () => {
        setValue('')
    }

    return (
        <div className="relative w-full">
            <input spellCheck='false'
                className={cn(
                    'relative pl-[15px] pr-[240px] h-[50px] w-full',
                    'border border-gray-100 rounded-2xl',
                    'focus:border-gray-300 focus:outline-none focus:shadow'
                )} placeholder='Add a comment'
                value={value} onChange={(e) => setValue(e.target.value)} />
            <div className={cn(
                'absolute right-[5px] top-[5px] flex  items-center gap-x-[20px] z-10'
            )}>
                <div className={cn(
                    'h-[40px] border border-gray-300 rounded-2xl px-[20px] flex items-center justify-center',
                    'hover:scale-101 transition-all duration-300 cursor-pointer',
                    value.length ? 'opacity-100' : 'opacity-0'
                )} onClick={clickCancel}>Cancel</div>
                <div className={cn(
                    'h-[40px] rounded-2xl text-white px-[20px] flex items-center justify-center',
                    'transition-all duration-300',
                    value.length && 'bg-black cursor-pointer hover:scale-101',
                    !value.length && 'bg-[#d1d5dc]'
                )} onClick={clickPublished}>Comment</div>
            </div>
        </div>
    )
}