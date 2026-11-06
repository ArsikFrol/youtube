import { cn } from "@/lib/utils"
import { TGetVideo } from "@/types"

type Props = {
    objVideo: TGetVideo,

    clickSubscribe: () => void
}

export default function Subscribed(props: Props) {


    return (
        <div className={cn(
            'bg-gray-900 rounded-3xl w-[150px] h-[50px] flex items-center justify-center text-white font-medium',
            'hover:scale-105 transition-transform duration-300 cursor-pointer'
        )} onClick={props.clickSubscribe}>
            Subscribe
        </div>
    )
}