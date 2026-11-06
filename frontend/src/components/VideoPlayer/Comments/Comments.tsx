import { UserCircle2 } from "lucide-react"

import { TGetVideo } from "@/types"
import Elem from "./Elem"
import Input from "./Input"

type Props = {
    objVideo: TGetVideo
}

export default function Comments(props: Props) {
    return (
        <div className='mb-[30px]'>
            <div className='text-[22px] font-medium mt-[20px] mb-[10px]'>{props.objVideo.comments.length} Comments</div>
            <div className='flex items-center gap-x-[10px]'>
                <UserCircle2 size={50} strokeWidth={1} />
                <Input objVideo={props.objVideo} />
            </div>
            <div className='flex flex-col gap-y-[20px] mt-[20px]'>
                {
                    props.objVideo.comments.map((obj, index) => <Elem key={index} obj={obj} />)
                }
            </div>
        </div>
    )
}