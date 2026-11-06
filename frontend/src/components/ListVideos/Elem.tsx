import { ClosedCaption, UserCircle2, VolumeX } from "lucide-react"

import { formatTimeAgo, formatViews } from "@/lib/formatDate"
import { cn } from "@/lib/utils"
import { TGetVideo } from "@/types/video"

type Props = {
    obj: TGetVideo,

    clickVideo: (videoId: string) => void
}

export default function Elem(props: Props) {
    return (
        <div className={cn(
            "flex flex-col p-[10px] rounded-2xl",
            'hover:bg-gray-100 transition-all duration-500 cursor-pointer'
        )} onClick={() => props.clickVideo(props.obj.videoId)}>
            <div className='group relative w-full h-[300px] bg-gray-400 rounded-2xl'>
                <div className={cn(
                    'absolute right-[20px] top-[10px]',
                    'flex items-center flex-col gap-y-[10px]',
                    'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                )}>
                    <VolumeX size={30} />
                    <ClosedCaption size={30} />
                </div>
            </div>
            <div className='flex items-center gap-x-[10px] my-[10px]'>
                <UserCircle2 size={40} strokeWidth={1} />
                <div className=''>
                    <div className='font-medium text-[16px]'>{props.obj.title}</div>
                    <div className=''>{props.obj.creator.channelName}</div>
                </div>
            </div>
            <div className='flex items-center gap-x-[10px]'>
                <div className=''>{formatViews(props.obj.views)} views</div>
                <div className=''>-</div>
                <div className=''>{formatTimeAgo(props.obj.createdAt)}</div>
            </div>
        </div>
    )
}