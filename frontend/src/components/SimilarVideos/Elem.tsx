import { ClosedCaption, UserCircle2, VolumeX } from "lucide-react"

import { TypeRoutes } from "@/hooks/useTypedRouter"
import { formatTimeAgo, formatViews } from "@/lib/formatDate"
import { cn } from "@/lib/utils"
import { TGetVideo } from "@/types/video"

type Props = {
    obj: TGetVideo,

    clickVideo: (link: TypeRoutes) => void
}

export default function Elem(props: Props) {
    return (
        <div className={cn(
            "flex gap-x-[10px] p-[5px] rounded-2xl",
            'hover:bg-gray-100 transition-colors duration-500 cursor-pointer'
        )} onClick={() => props.clickVideo(`/videos/${props.obj.videoId}`)}>
            <div className='group relative w-[330px] h-[200px] bg-gray-400 rounded-2xl'>
                <div className={cn(
                    'absolute right-[20px] top-[10px]',
                    'flex items-center flex-col gap-y-[10px]',
                    'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                )}>
                    <VolumeX size={24} />
                    <ClosedCaption size={24} />
                </div>
            </div>
            <div className='w-[210px]'>
                <div className='font-medium'>{props.obj.title}</div>
                <div className='flex items-center gap-x-[5px] my-[5px]'>
                    <UserCircle2 size={30} strokeWidth={1} />
                    <div className='text-[14px]'>{props.obj.creator.channelName}</div>
                </div>
                <div className='flex items-center gap-x-[10px] text-[14px] font-light'>
                    <div className=''>{formatViews(props.obj.views)} views</div>
                    <div className=''>-</div>
                    <div className=''>{formatTimeAgo(props.obj.createdAt)}</div>
                </div>
            </div>
        </div>
    )
}