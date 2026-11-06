import { cn } from "@/lib/utils"
import { TGetComment } from "@/types"
import { UserCircle2 } from "lucide-react"

type Props = {
    obj: TGetComment
}

export default function Elem(props: Props) {
    return (
        <div className={cn(
            'flex gap-x-[5px]',
        )}>
            <UserCircle2 size={35} strokeWidth={1} />
            <div className=''>
                <div className='font-medium'>{props.obj.writer.profileName}</div>
                <div className='font-light'>{props.obj.text}</div>
            </div>
        </div>
    )
}