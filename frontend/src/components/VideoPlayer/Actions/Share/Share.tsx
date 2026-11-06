'use client'

import { useRef, useState } from "react"
import { useClickAway } from "react-use"
import { Share2 } from "lucide-react"

import { TGetVideo } from "@/types"
import { cn } from "@/lib/utils"
import PopUpWindow from "./PopUpWindow"

type Props = {
    objVideo: TGetVideo
}

export default function Share({ objVideo }: Props) {
    const [showShare, setShowShare] = useState<boolean>(false)
    const [isCopy, setIsCopy] = useState<boolean>(false)

    const ref = useRef<HTMLDivElement>(null)

    const clickShare = () => {
        setShowShare(!showShare)
    }

    useClickAway(ref, () => {
        setShowShare(false)
        setIsCopy(false)
    })

    return (
        <div className='relative' ref={ref}>
            <div className={cn(
                'group bg-gray-100 rounded-2xl py-[7px] px-[15px] flex items-center gap-x-[10px]',
                'hover:bg-gray-200 transition-colors duration-300 cursor-pointer'
            )}
                onClick={clickShare}>
                <Share2 size={30} strokeWidth={1.5} className="group-hover:scale-105 transition-transform duration-300 cursor-pointer" />
                <div className=''>Share</div>
            </div>
            {showShare &&
                <PopUpWindow isCopy={isCopy} setIsCopy={setIsCopy} />
            }
        </div>
    )
}