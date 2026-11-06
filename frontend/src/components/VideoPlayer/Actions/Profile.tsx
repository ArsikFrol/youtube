'use client'

import { UserCircle2 } from "lucide-react"

import { useTypedRouter } from "@/hooks/useTypedRouter"
import { formatViews } from "@/lib/formatDate"
import { cn } from "@/lib/utils"
import useProfile from "@/store/profile/profile"
import Bell from "./Bell"
import Subscribed from "./Subscribed"
import { useToggleSubscription } from "@/hooks/useToggleSubscription"
import { useUpdateNotification } from "@/hooks/useUptadeNotification"
import { TGetVideo } from "@/types/video"

type Props = {
    objVideo: TGetVideo
}

export default function Profile(props: Props) {
    const router = useTypedRouter()

    const { profileId } = useProfile()

    const { subscribers, isSubscribed, toggle } = useToggleSubscription(
        props.objVideo.creator.channelId,
        profileId,
        props.objVideo.creator.subscribers,
        props.objVideo.subscription.isSubscribed,
    )

    const { changeNotification, notification, subscriptionId } = useUpdateNotification(
        props.objVideo.subscription.subscriptionId,
        props.objVideo.subscription.notification
    )

    const clickSubscribe = () => {
        toggle()
    }

    return (
        <div className='flex items-center gap-x-[50px]'>
            <div className={cn(
                'flex items-center gap-x-[10px]',
                'hover:scale-101 transition-transform duration-300 cursor-pointer'
            )} onClick={() => router.push(`/@${props.objVideo.creator.channelId}`)}>
                <UserCircle2 size={50} strokeWidth={1} />
                <div className=''>
                    <div className='font-medium'>{props.objVideo.creator.channelName}</div>
                    <div className='text-[14px] font-light text-gray-400'>
                        {formatViews(subscribers)} subscribers
                    </div>
                </div>
            </div>
            {isSubscribed
                ? <Bell toggleSuscribe={toggle} changeNotification={changeNotification}
                    notification={notification} subscriptionId={subscriptionId} />
                : <Subscribed objVideo={props.objVideo} clickSubscribe={clickSubscribe} />
            }
        </div>
    )
}